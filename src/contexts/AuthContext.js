import React, { createContext, useContext, useState } from "react";

const USER = {
    email: "Kfbuitron@intern.com",
    password: "123456"
}
const AuthContext = createContext();

export const AuthContextsProvider = ({ children }) => {
    const [email, setEmail] = useState("kfbuitron@puce.edu.ec");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const validar = () => {
  
    }
    const login = () => {
        alert(`${email} / ${password}`);
    };

    return (
        <AuthContext.Provider value={{ email, setEmail, password, setPassword, isLoggedIn, setIsLoggedIn, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    return useContext(AuthContext);
}


