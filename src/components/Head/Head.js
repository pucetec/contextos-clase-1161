import React from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import Forms from "../../common/Forms/Forms";
import './Head.css';

const Head = ({ className }) => {
  const { setEmail, login, setPassword } = useAuth();


  return (
    <div className={className}>
      <h1>Ingrese al sistema</h1>
      <Forms className={"forms"} type={"text"} text={"Introduce tu nombre de usuario"} onChange={(e) => setEmail(e.target.value)} />
      <Forms className={"forms"} type={"password"} text={"Introduce tu contraseña"} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => login()}>Ingresar</button>
    </div>
  );
};

export default Head