import { useAuth } from "../../contexts/AuthContext";

const Body = () => {
  const { email } = useAuth ();
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: "200px", height: "100px", display: "block", backgroundColor: "yellow", margin: "auto"}}>
        Body{" "}
        {email}</div>
      </div>
  )
  
}
export default Body;