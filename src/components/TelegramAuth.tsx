import { useEffect, useRef } from 'react';
import { useAuth } from '@/hooks/use-auth';

interface TelegramAuthProps {
  buttonSize?: 'large' | 'medium' | 'small';
  cornerRadius?: number;
  requestAccess?: boolean;
  usePic?: boolean;
  botName?: string;
}

const TelegramAuth = ({
  buttonSize = 'medium',
  cornerRadius = 8,
  requestAccess = false,
  usePic = true,
  botName = 'mototyumen_bot' // Заменить на имя вашего бота
}: TelegramAuthProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { login, scriptLoaded } = useAuth();

  useEffect(() => {
    if (!scriptLoaded || !containerRef.current) return;

    // Очищаем контейнер
    containerRef.current.innerHTML = '';

    // Создаем функцию обратного вызова для Telegram
    // @ts-ignore
    window.onTelegramAuth = (user: any) => {
      login(user);
    };

    // Создаем кнопку авторизации Telegram
    // @ts-ignore
    window.Telegram.Login.auth(
      {
        bot_id: botName,
        element: containerRef.current,
        button_size: buttonSize,
        corner_radius: cornerRadius,
        request_access: requestAccess,
        user_pic: usePic,
        onAuth: window.onTelegramAuth
      },
      botName
    );
    
    // Отключаем запрос личных данных
    const style = document.createElement('style');
    style.innerHTML = `
      .tgme_widget_login input[type="checkbox"] {
        display: none !important;
      }
      .tgme_widget_login .tgme_widget_login_check {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // @ts-ignore
      window.onTelegramAuth = undefined;
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [scriptLoaded, login, buttonSize, cornerRadius, requestAccess, usePic, botName]);

  return (
    <div 
      ref={containerRef} 
      className="telegram-auth flex justify-center items-center min-h-[36px]"
    >
      {!scriptLoaded && (
        <div className="animate-pulse bg-gray-800 rounded-md h-[36px] w-[240px]"></div>
      )}
    </div>
  );
};

export default TelegramAuth;
