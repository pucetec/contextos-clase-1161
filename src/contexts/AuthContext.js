import React, { createContext, useContext, useState } from "react";

const USER = {
  email: "Dsc@gmail.com",
  password: "12345",
};

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("dsconst@test.com");
  const [password, setPassword] = useState("");
  const [isloggedIn, setIsLoggedIn] = useState(true);

  const ingresar = () => {
    if (email === USER.email && password === USER.password) {
      console.log("valores correctos");
    } else {
      console.log("valores Incorrectos");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        setPassword,
        ingresar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
