import React, { craeteContext, createContext, useContext, useState } from 'react';
import { getByEmail } from '../../rest/restdb';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const foundUser = await getByEmail(username);

    if (foundUser?.password === password) {
      setUser(foundUser);
    } else {
      alert('Login failed');
    }
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);