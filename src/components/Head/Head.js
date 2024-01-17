import { useAuth } from "../../contexts/AuthContext";



const Head = () => {
const {setEmail, setPassword, login} = useAuth();
  return (
    <div style= {{textAlign: "center"}}>
Correo: <input type="text" onChange={(e) => setEmail(e.target.value)}/>
<br></br>
<br></br>
Contraseña: <input type="password" onChange={(e) => setPassword(e.target.value)}/>
<br></br>
<br></br>
<button onClick={() => login()}>LOGIN</button>

    </div>
  );
}

export default Head;
