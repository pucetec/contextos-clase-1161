import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const Body = () => {
  const { email } = useAuth();
  return <div style={{ width: "20%", height: "100px", margin: "auto", display: "block", background: "yellow" }}>CUERPO {email}</div>;
};

export default Body;
