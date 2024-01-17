import React, { createContext, useContext, useState } from "react";

const USER = {
  email: "laurent@mail.com",
  password: "123456"
}

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("lolo@mail.fr");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    
    if (email === "") {
      setIsLoggedIn(!isLoggedIn)
      alert("Su email esta en blanco, ingrese su email por favor")
      //alert(`${email} / ${password}`);
    } else if (password === "") {
      alert("Su password esta en blanco, ingrese su password por favor")
    } else if (email === USER.email && password ===USER.password) {
      setIsLoggedIn(!isLoggedIn)
      alert("Te estas logeado con exito!")
    } else {
      alert("Datos incorrectos")
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