import { useAuth } from "../../contexts/AuthContext";

const Head = () => {
  const { setEmail, setPassword, login } = useAuth();
  return (
    <div style={{ textAlign: "center" }}>
      
      <div style={{ width: "200px", height: "100px", display: "block", backgroundColor: "red", margin: "auto"}}>
      Ingresa tu correo:<input type="text" onChange={(e) => setEmail(e.target.value)} ></input>
      Ingresa tu password:<input type="text" onChange={(e) => setPassword(e.target.value)}></input>
      
      <button onClick={login}>LOGIN</button>
        
        </div>
      </div>
  )
  
}
export default Head;