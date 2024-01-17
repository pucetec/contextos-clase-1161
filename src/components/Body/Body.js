import { useAuth } from "../../Contexts/AuthContext";

const Body = () => {
  const { email } = useAuth();
  return (
    <div
      style={{
        margin: "auto",
        width: "250px",
        height: "250px",
        backgroundColor: "red",
      }}
    >
      Body {email}
    </div>
  );
};

export default Body;
