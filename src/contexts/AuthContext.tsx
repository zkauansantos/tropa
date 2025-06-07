'use client';

import { delay, safeParseLocalStorage, safeSetLocalStorage } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

interface User {
  email: string;
  name: string;
}

interface IAuthContext {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    safeParseLocalStorage<boolean>('isAuthenticated') || false
  );
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const login = useCallback(
    async (email: string) => {
      await delay();
      setIsAuthenticated(true);
      setUser({
        email,
        name: 'Kaique Steck',
      });
      router.replace('/');

      safeSetLocalStorage('isAuthenticated', true);
    },
    [router]
  );

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    router.replace('/login');
    safeSetLocalStorage('isAuthenticated', false);
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
