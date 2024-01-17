import React from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

const Body = ({ className }) => {
  const { email, isLoggedIn } = useAuth();

  return (
    <div className={className}>
      <h1>{isLoggedIn ? `Bienvenido ${email}` : ""}</h1>
    </div>
  );
};

export default Body;
