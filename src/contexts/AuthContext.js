import React, { createContext, useContext, useState } from "react";

const USER = {
  email: "josue0724@gmail.com",
  password: "123456",
};

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("josue@gmai.com");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Login = () => {
    alert(`Intento Fallido de sesion: ${email} / ${password}`);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ email, setEmail, setPassword, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
