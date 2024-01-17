import { useAuth } from "../../contexts/AuthContext";

const Footer = () => {
  const { email } = useAuth();
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: "200px", height: "100px", display: "block", backgroundColor: "lightblue", margin: "auto"}}>
        Footer{" "}
        {email}</div>
      </div>
  )
  
}
export default Footer;
