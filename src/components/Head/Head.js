import { useAuth } from "../../contexts/AuthContext";

const Head = () => {
  const { setEmail, setPassword, Login } = useAuth();

  return (
    <div
      style={{
        width: "20%",
        height: "100px",
        backgroundColor: "red",
        display: "block",
        margin: "auto",
      }}
    >
      Ingresa tu correo:{" "}
      <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
      <br></br>
      Ingresa tu password:
      <input type="text" onChange={(e) => setPassword(e.target.value)}></input>
      <br></br>
      <button onClick={() => Login()}> LOGIN</button>
    </div>
  );
};

export default Head;
