import { useAuth } from "../../contexts/AuthContext";
const Footer=()=>{
  const { email } =useAuth();
    return(

        <div style={{width:"20%",margin:"auto",display:"block",height:"100px",backgroundColor:"yellow"}}>
        pies{email}
      </div>
    );


};
export default Footer;