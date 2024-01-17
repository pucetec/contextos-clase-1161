import { useAuth } from "../../contexts/AuthContext";

const Body = () => {
  const { email } = useAuth();
  return (
    <div
      style={{
        width: "20%",
        height: "100px",
        backgroundColor: "green",
        display: "block",
        margin: "auto",
      }}
    >
      BODY:{email}
    </div>
  );
};

export default Body;
