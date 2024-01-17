import { useAuth } from "../../contexts/AuthContext";

const Footer = () => {
  const { email } = useAuth();
  return (
    <div
      style={{
        margin: "auto",
        width: "500px",
        height: "100px",
        backgroundColor: "yellow",
      }}
    >
      PIES {email}
    </div>
  );
};
export default Footer;
