import "./App.css";

// Components
import Head from "./components/Head/Head";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

// Contexto
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {

  return (
    <AuthContextProvider>
      <div className="App d-flex flex-column align-items-center my-5 py-5 container">
        <Head />
        <Body />
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
