import { useAuth } from "../../contexts/AuthContext";

const Body = () => {
  const { email } = useAuth();

  return (
    <div
      style={{
        textAlign: "center",
        width: "20%",
        margin: "auto",
        display: "block",
        height: "100px",
        backgroundColor: "yellow",
      }}
    >
      Body {email}
    </div>
  );
};

export default Body;
