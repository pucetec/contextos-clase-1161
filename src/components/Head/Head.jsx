import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const Head = () => {
  const { setEmail, setPassword, login } = useAuth();
  return (
    <div style={{ width: "20%", height: "150px", margin: "auto", display: "block", background: "red" }}>
      <div className="head" style={{ margin: "20px", display: "flex", justifyContent: "center", flexDirection: "column", padding: "auto" }}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={(event) => setPassword(event.target.value)} />
        <button onClick={login}>submit</button>
      </div>
    </div>
  );
};

export default Head;
