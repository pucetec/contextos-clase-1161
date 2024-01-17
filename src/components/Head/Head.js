// Context
import { useAuth } from "../../context/AuthContext";

const Head = () => {

  const { setEmail, setPass, login } = useAuth();

  return (
    <div className="w-50 p-5 bg-primary rounded-4 my-4">

      <div className="d-flex flex-column gap-4">

        <h1 className="fw-semibold text-white">
          Log In
        </h1>

        <div class="form-floating">
          <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" onChange={(e) => setPass(e.target.value)} id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
        <button className="btn btn-light" onClick={login}>
          <i class="bi bi-box-arrow-in-right me-2"></i>
          Log In
        </button>
      </div>

    </div>
  );
}

export default Head;