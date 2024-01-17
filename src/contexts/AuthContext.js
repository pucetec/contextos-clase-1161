import React, { createContext, useContext, useState } from "react";

const USER = { email: "jose@gmail.com", password: "123456789" };

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("joe@doe.com");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(email === USER.email && password === USER.password);
  };

  return <AuthContext.Provider value={{ email, setEmail, setPassword, isLoggedIn, login }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}
