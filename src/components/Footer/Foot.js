import { useAuth } from "../../contexts/AuthContext";
const Foot = () => {
  const { email } = useAuth();
  return (
    <div
      style={{
        width: "20%",
        margin: "auto",
        display: "block",
        height: "100px",
        backgroundColor: "green",
      }}
    >
      Pies {email}
    </div>
  );
};
export default Foot;
