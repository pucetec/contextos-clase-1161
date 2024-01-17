import { useAuth } from "../../contexts/AuthContext";



const Footer = () => {
    const {email} = useAuth();

    return (
      <div style= {{textAlign: "center"}}>
  FOOTER  {email}  
      </div>
    );
  }
  
  export default Footer;
  