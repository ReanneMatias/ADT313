import React, { createContext, useState } from 'react';

// Create User Context
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const login = (userData, token) => {
    setUser(userData);
    setAccessToken(token);
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
  };

  return (
    <UserContext.Provider value={{ user, accessToken, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
