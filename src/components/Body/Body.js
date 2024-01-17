import { useAuth } from "../../contexts/AuthContext";
const Body = () => {
  const { email } = useAuth();
  return (
    <div style={{
      margin: "auto",
      width: "20%",
      height: "100px",
      backgroundColor: "green"
    }}>

      Body {email}
    </div>
  );
}
export default Body;