import { useAuth } from "../../contexts/AuthContext";

const Footer = () => {
  const { email } = useAuth();
  return (
    <div
      style={{
        width: "20%",
        height: "100px",
        backgroundColor: "yellow",
        display: "block",
        margin: "auto",
      }}
    >
      FOOTER:
      {email}
    </div>
  );
};

export default Footer;
