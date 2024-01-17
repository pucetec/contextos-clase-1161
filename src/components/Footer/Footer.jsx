import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const Footer = () => {
  const { isLoggedIn } = useAuth();
  return <div style={{ width: "20%", height: "100px", margin: "auto", display: "block", background: "green" }}>PIES {`${isLoggedIn}`} </div>;
};

export default Footer;
