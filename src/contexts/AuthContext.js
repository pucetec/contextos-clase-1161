import React, { createContext, useContext, useState } from "react";

const USER = {
  email: "quilachamind@gmail.com",
  password: "mathi",
};

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    if (email === USER.email && password === USER.password) {
      setIsLoggedIn(true);
      alert("Inicio de sesión exitoso!");
    } else {
      alert("Correo electrónico o contraseña incorrectos");
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
