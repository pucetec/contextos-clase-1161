import { useAuth } from "../../contexts/AuthContext";

const Body = () => {
  const {email} = useAuth();

  return(
    <div style={{margin: "auto", width: "150px", height: "50px", backgroundColor: "yellow"}}>
      {email}
    </div>
  );
}
export default Body;