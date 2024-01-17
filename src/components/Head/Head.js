import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Head = () => {
  const { email, setEmail, password, setPassword, saveCredentials, login } =
    useAuth();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    saveCredentials();
    login();
    setLoginSuccess(true); // Set login success to true after login
  };

  return (
    <div>
      <p>{loginSuccess ? "El inicio de sesión se ejecutó correctamente" : ""}</p>
      {!loginSuccess && (
        <div>
          <p>{errorMessage}</p>
          <form>
            <label>
              Ingresa tu correo:
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Ingresa tu contraseña:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>
              Iniciar sesión
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Head;


