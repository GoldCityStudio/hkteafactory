'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error: string }>;
  logout: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error: string }>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false); // Set to false since auth is not active
  
  // No actual authentication logic as admin/auth routes are removed
  const login = useCallback(async (email: string, password: string) => {
    console.warn('Login functionality is disabled.');
    // Simulate failed login
    return { success: false, error: 'Login functionality is currently disabled.' };
  }, []);

  const logout = useCallback(async () => {
    console.warn('Logout functionality is disabled.');
    setUser(null);
  }, []);

  const register = useCallback(async (name: string, email: string, password: string) => {
    console.warn('Register functionality is disabled.');
    // Simulate failed registration
    return { success: false, error: 'Registration functionality is currently disabled.' };
  }, []);

  // No need for checkAuth since there are no auth routes
  useEffect(() => {
    // console.log('AuthContext initialized. Auth functionality disabled.');
    // Prevent any attempt to check auth status on mount
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 