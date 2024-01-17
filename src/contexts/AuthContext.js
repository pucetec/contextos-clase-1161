import React, {createContext, useContext, useState} from "react";

const USER = {
    email : "test@gmail.com",
    password: "123456",
};

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [email ,setEmail] = useState("test@gmail.com");
    const [password ,setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = () => {
        alert(`${email} / ${password}`);
    };

    return(
        <AuthContext.Provider value={{email, setEmail, setPassword}}>{children}</AuthContext.Provider>
    );
};


export function useAuth() {
    return useContext(AuthContext);
}