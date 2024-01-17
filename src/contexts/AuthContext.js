import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [savedCredentials, setSavedCredentials] = useState([]);

  const saveCredentials = () => {
    if (email && password) {
      setSavedCredentials((prevCredentials) => [
        ...prevCredentials,
        { email, password },
      ]);
      setEmail("");
      setPassword("");
    }
  };

  const login = () => {
    const matchingCredentials = savedCredentials.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (matchingCredentials) {
      alert("El inicio de sesión se ejecutó correctamente");
    } else {
      alert("El correo y contraseña no son los correctos");
    }
  };

  return (
    <AuthContext.Provider
      value={{ email, setEmail, password, setPassword, saveCredentials, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
