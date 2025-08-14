import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthCtx = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('tm_user');
    return raw ? JSON.parse(raw) : null;
  });

  const login = (payload) => {
    setUser(payload);
    localStorage.setItem('tm_user', JSON.stringify(payload));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tm_user');
  };

  useEffect(() => {}, [user]);

  return (
    <AuthCtx.Provider value={{ user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}

export const useAuth = () => useContext(AuthCtx);
