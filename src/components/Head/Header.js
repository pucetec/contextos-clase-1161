import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { setEmail, setPassword, ingresar } = useAuth();
  return (
    <div
      style={{
        margin: "auto",
        width: "500px",
        height: "100px",
        backgroundColor: "blue",
      }}
    >
      <div>
        <input onChange={(event) => setEmail(event.target.value)}></input>
        <br />
        <input onChange={(event) => setPassword(event.target.value)}></input>
      </div>
      <div>
        <button onClick={() => ingresar()}>Ingresar</button>
      </div>
    </div>
  );
};
export default Header;
