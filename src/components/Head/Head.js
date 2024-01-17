import { useAuth } from "../../contexts/AuthContext";
const Head = () => {
  const { setEmail, setPassword, login } = useAuth();

  return (
    <div style={{
      margin: "auto",
      width: "20%",
      height: "100px",
      backgroundColor: "yellow"
    }}
    >

    Ingrese tu correo: {""}
    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
    <br></br>
    Ingrese su contraseña: {""}
    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
    <button onClick={() => login()}>ingresar</button>
    </div>
  );
}
export default Head;