import { useAuth } from "../../contexts/AuthContext";
const Head=()=>{
    const { setEmail ,setPassword,login} =useAuth();
    return(

        <div style={{width:"20%",margin:"auto",display:"block",height:"100px",backgroundColor:"red"}}>

        ingresa tu correo:{""}
        <br></br>
        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        <br></br>
        ingresa tu clave:{""} 
        <br></br>
        <input type="text" onChange={(e) => setPassword(e.target.value)}/>
        <br></br>
        <button onClick={()=>login()}> LOGIN </button>
      </div>
    );

};
export default Head;