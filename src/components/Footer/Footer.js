import React from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

const Footer = ({ className}) => {
  const { email } = useAuth(); 
  
  return (
    <div className='footer'>Pies {email} </div>
  );
};

export default Footer;
