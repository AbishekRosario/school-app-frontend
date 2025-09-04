import React, { createContext, useState, useEffect, useContext } from 'react';
import apiMethods from '../api/axiosInstance';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initial load from localStorage
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const savedUser = localStorage.getItem('user');

    if (token && savedUser && savedUser !== 'undefined') {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (err) {
        console.error('Failed to parse user data:', err);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  // Login via API and update memory + storage
  const login = async (credentials) => {
    const response = await apiMethods.post('/auth/login', credentials);
    const { accessToken, refreshToken, user } = response.data || {};
    if (!user) throw new Error('User data missing from response');

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user); // <-- critical to avoid flicker

    return response;
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading, login, logout }}>
      {!loading && children} {/* wait until auth check completes */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
};
