import { useAuth } from "../../Contexts/AuthContext";

const Footer = () => {
  const { email } = useAuth();
  return (
    <div
      style={{
        margin: "auto",
        width: "250px",
        height: "250px",
        backgroundColor: "blue",
      }}
    >
      Footer {email}
    </div>
  );
};

export default Footer;
