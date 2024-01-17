import { useAuth } from "../../contexts/AuthContext";

const Footer = () => {
  const {email} = useAuth();
  
  return(
    <div style={{margin: "auto", width: "150px", height: "50px", backgroundColor: "blue"}}>
      {email}
    </div>
  );
}
export default Footer;