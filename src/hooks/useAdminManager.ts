
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/use-auth';

/**
 * Hook for managing admins in the admin panel
 */
export const useAdminManager = () => {
  const { getAdminsList, addAdmin, removeAdmin } = useAuth();
  const [adminUsername, setAdminUsername] = useState('');
  const [adminsList, setAdminsList] = useState<string[]>([]);
  
  // Load admins list on mount
  useEffect(() => {
    setAdminsList(getAdminsList());
  }, [getAdminsList]);
  
  const handleAddAdmin = () => {
    if (adminUsername.trim()) {
      addAdmin(adminUsername.trim());
      setAdminUsername('');
      setAdminsList(getAdminsList());
    }
  };
  
  const handleRemoveAdmin = (username: string) => {
    removeAdmin(username);
    setAdminsList(getAdminsList());
  };
  
  return {
    adminUsername,
    adminsList,
    setAdminUsername,
    handleAddAdmin,
    handleRemoveAdmin
  };
};
