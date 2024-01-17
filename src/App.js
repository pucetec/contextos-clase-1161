import "./App.css";
import Body from "./components/Body/Body";
import Head from "./components/Head/Head";
import Foot from "./components/Footer/Foot";
import { AuthContextProvider } from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const email = "ilinkzzx@gmail.com";
  return (
    <AuthContextProvider>
      <div className="App">
        <Head email={email} />
        <Body email={email} />
        <Foot email={email} />
      </div>
    </AuthContextProvider>
  );
};

export default App;
