import React,{createContext,useContext, useState} from "react";

const USER ={
    email:"bspillajo@",
    password:"123456"
}
const AuthContext= createContext();

export const AuthContextProvider=({children})=>{
    const [email, setEmail]=useState("bs@gmail.com");
    const [password, setPassword]=useState("");

    const login =()=>{
        if (email === USER.email && password ===USER.password)
        {
            alert("Bienvenido");
        }else{
            alert("Usuario o contraseña incorrectos");
        }
    };

     return (
         <AuthContext.Provider value={{email,setEmail,setPassword,login}}>
             {children}</AuthContext.Provider>
     );
 };
 
 export function useAuth(){
     return useContext(AuthContext);
 }