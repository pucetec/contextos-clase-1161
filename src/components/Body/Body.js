// Context
import { useAuth } from "../../context/AuthContext";

const Body = () => {

  const { email, isLogIn, Logout } = useAuth();

  return (
    <div className="w-50 p-5 bg-success text-white rounded-4 my-4">
      Body: {email}
      {
        isLogIn ?
          <>
            <h1>Usuario Logeado</h1>
            <button onClick={Logout} className="btn btn-danger">
              Cerrar Sesion
            </button>
          </>
          :
          <></>
      }
    </div>
  );
}

export default Body;