import React, { createContext, useContext, useState } from "react";

const USER = {
  email: "cristian@gmail.com",
  password: "123456",
};

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("joe@test.com");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    if (email === USER.email && password === USER.password) {
      setIsLoggedIn(true);
    }
    else {
      email === "" ? alert("Ingrese un usuario") : password === "" ? alert("Ingrese una contraseña") : alert("Datos incorrectos");
      setIsLoggedIn(false);
    }
  };

  return (
    <AuthContext.Provider value={{ email, setEmail, setPassword, login, isLoggedIn }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}