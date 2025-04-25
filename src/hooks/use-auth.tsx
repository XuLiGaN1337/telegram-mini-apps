
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  username: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  isLoading: boolean;
  login: (telegramData?: any) => Promise<void>;
  logout: () => void;
  addAdmin: (username: string) => void;
  removeAdmin: (username: string) => void;
  getAdminsList: () => string[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Admin usernames list
const ADMIN_USERNAMES = ['anthony_genevezy74'];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [adminsList, setAdminsList] = useState<string[]>(ADMIN_USERNAMES);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem('motoUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (e) {
        console.error('Failed to parse user data:', e);
        localStorage.removeItem('motoUser');
      }
    }
    
    // Load admins list
    const storedAdmins = localStorage.getItem('motoAdmins');
    if (storedAdmins) {
      try {
        const parsedAdmins = JSON.parse(storedAdmins);
        setAdminsList(parsedAdmins);
      } catch (e) {
        console.error('Failed to parse admins list:', e);
      }
    } else {
      // Initialize with default admin
      localStorage.setItem('motoAdmins', JSON.stringify(ADMIN_USERNAMES));
    }
    
    setIsLoading(false);
  }, []);

  // Simulate Telegram login
  const login = async (telegramData?: any) => {
    setIsLoading(true);
    
    try {
      // If real Telegram data provided
      if (telegramData) {
        // In real implementation, validate the data with backend
        const userData: User = {
          id: telegramData.id.toString(),
          name: `${telegramData.first_name} ${telegramData.last_name || ''}`.trim(),
          avatarUrl: telegramData.photo_url || 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop',
          username: telegramData.username,
          isAdmin: adminsList.includes(telegramData.username)
        };
        
        setUser(userData);
        localStorage.setItem('motoUser', JSON.stringify(userData));
      } else {
        // For demo purposes without real Telegram widget
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockUser: User = {
          id: '123456789',
          name: 'Демо Пользователь',
          avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop',
          username: 'anthony_genevezy74', // For demo purposes, using the admin username
          isAdmin: adminsList.includes('anthony_genevezy74')
        };
        
        setUser(mockUser);
        localStorage.setItem('motoUser', JSON.stringify(mockUser));
      }
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('motoUser');
  };
  
  const addAdmin = (username: string) => {
    if (username && !adminsList.includes(username)) {
      const newAdminsList = [...adminsList, username];
      setAdminsList(newAdminsList);
      localStorage.setItem('motoAdmins', JSON.stringify(newAdminsList));
    }
  };
  
  const removeAdmin = (username: string) => {
    // Prevent removing the main admin
    if (username === 'anthony_genevezy74') {
      return;
    }
    
    if (username && adminsList.includes(username)) {
      const newAdminsList = adminsList.filter(admin => admin !== username);
      setAdminsList(newAdminsList);
      localStorage.setItem('motoAdmins', JSON.stringify(newAdminsList));
    }
  };
  
  const getAdminsList = () => {
    return adminsList;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin: user?.isAdmin || false,
        isLoading,
        login,
        logout,
        addAdmin,
        removeAdmin,
        getAdminsList
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
