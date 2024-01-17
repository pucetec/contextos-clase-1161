import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const USER = {
  email: "santi@test.com",
  pass: "123abc"
}

export const AuthContextProvider = ({ children }) => {

  const [email, setEmail] = useState("example@test.com")
  const [pass, setPass] = useState("")
  const [isLogIn, setIsLogIn] = useState(false);

  const login = () => {
    if (email === USER.email && pass === USER.pass){
      return setIsLogIn(true);
    }
    else{
      alert("El usuario o contraseña son incorrectos")
      return setIsLogIn(false);
    }
  }

  const Logout = () => {
    setIsLogIn(false)
  }
  
  return (
    <AuthContext.Provider value={{ email, setEmail, setPass, login, isLogIn, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(){
  return useContext(AuthContext);
};