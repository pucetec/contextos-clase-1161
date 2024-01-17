import { useAuth } from "../../contexts/AuthContext";



const Body = () => {
    const {email} = useAuth();

    return (
      <div style= {{textAlign: "center"}}>
  BODY  {email}  
      </div>
    );
  }
  
  export default Body;
  