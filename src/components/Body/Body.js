import { useAuth } from "../../contexts/AuthContext";

const Body = () => {
  const { email } = useAuth();
  return (
    <div
      style={{
        margin: "auto",
        width: "500px",
        height: "100px",
        backgroundColor: "red",
      }}
    >
      CUERPO {email}
    </div>
  );
};
export default Body;
