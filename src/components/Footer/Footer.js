import { useAuth } from "../../contexts/AuthContext";

const Footer = () => {
  const { email } = useAuth();
  return (
    <div style={{
      margin: "auto",
      width: "20%",
      height: "100px",
      backgroundColor: "red"
    }}>

      Footer {email}
    </div>
  );
}
export default Footer;