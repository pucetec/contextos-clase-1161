import { useAuth } from "../../contexts/AuthContext";
const Body = () => {
  const { email } = useAuth();
  return (
    <div
      style={{
        width: "20%",
        margin: "auto",
        display: "block",
        height: "100px",
        backgroundColor: "Yellow",
      }}
    >
      Cuerpo {email}
    </div>
  );
};
export default Body;
