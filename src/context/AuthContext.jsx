import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('hc_user')); } catch { return null; }
  });

  const login = (email, password) => {
    if (email === 'admin@hindiconnect.com' && password === 'admin123') {
      const u = { email, role: 'admin', name: 'Admin' };
      localStorage.setItem('hc_user', JSON.stringify(u));
      setUser(u);
      return true;
    }
    return false;
  };

  const logout = () => { localStorage.removeItem('hc_user'); setUser(null); };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
