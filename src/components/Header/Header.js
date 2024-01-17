import { useAuth } from "../../Contexts/AuthContext";

const Header = () => {
  const { setEmail, setPassword, login } = useAuth();

  return (
    <div
      style={{
        margin: "auto",
        width: "250px",
        height: "250px",
        backgroundColor: "yellow",
      }}
    >
      Ingresa tu correo:
      <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
      <br></br>
      Ingresa tu password:
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>
      <button onClick={() => login()}>LOGIN</button>
    </div>
  );
};

export default Header;
