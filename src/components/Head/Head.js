import { useAuth } from "../../contexts/AuthContext";

const Head = () => {
  const { setEmail, setPassword, login } = useAuth();

  return (
    <div
      style={{
        textAlign: "center",
        width: "30%",
        margin: "auto",
        display: "block",
        height: "250px",
        backgroundColor: "blue",
      }}
    >
      <h1 style={{ color: "white" }}>Probando Contextos</h1>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ color: "white" }}>Ingresa tu correo:</label>{" "}
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ color: "white" }}>Ingresa tu contraseña:</label>{" "}
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "white",
          color: "blue",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => login()}
      >
        Login
      </button>
    </div>
  );
};

export default Head;
