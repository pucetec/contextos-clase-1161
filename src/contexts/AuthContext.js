import React, { createContext, useContext, useState } from "react";

const USER = {
  email: "ilinkzzx@gmail.com",
  password: "123456",
};

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("ilinkzzx@gmail.com");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    if (email === USER.email && password === USER.password) {
      setIsLoggedIn(true);
      alert(`Logueo correcto`);
    } else {
      alert(`Logueo incorrecto`);
    }
  };

  return (
    <AuthContext.Provider value={{ email, setEmail, setPassword, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
