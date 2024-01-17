import React, {createContext, useContext, useState} from "react";

const USER = {
  email: "leonardo@test.com",
  pasword: "12345",
};

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("leo@test.com");
  const [pasword, setPasword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    
    if ((`${email}`) == USER.email) {
      if ((`${pasword}`) == USER.pasword) {
        setIsLoggedIn(true)
        alert("inicio sesion")
      }
      else{
        alert("contraseña incorrecta")
      };
    } else {
      alert("credenciales incorrectas")
    };
  };

  return (
    <AuthContext.Provider value={{email, setEmail, setPasword, login}}>
      {children}
    </AuthContext.Provider>
  );
  }
  export function useAuth() {
    return useContext(AuthContext);
  }
