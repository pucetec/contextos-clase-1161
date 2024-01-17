import { useAuth } from "../../contexts/AuthContext";

const Head = () => {
  const {setEmail, setPasword, login} = useAuth();

  return(
    <div style={{margin: "auto", width: "300px", height: "150px", backgroundColor: "green"}}>
      
      Ingresa tu correo:
      <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
      <br></br>
      Ingresa tu Contraseña
      <input type="text" onChange={(e) => setPasword(e.target.value)}></input>
      <br></br>
      <button onClick={() => login()}>LOGIN</button>
    </div>
  );
}
export default Head;