import { useAuth } from "../../contexts/AuthContext";

const Footer = () => {
  const { email } = useAuth();

  return (
    <div
      style={{
        textAlign: "center",
        width: "20%",
        margin: "auto",
        display: "block",
        height: "100px",
        backgroundColor: "Green",
      }}
    >
      Footer {email}
    </div>
  );
};

export default Footer;
