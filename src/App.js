import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body/Body";
import Head from "./components/Head/Head";
import Footer from "./components/Footer/Footer";
import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  const email = "joes@test.com";
  return (
    <AuthContextProvider>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#f0f0f0",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Head />
        <Body />
        <Footer />
      </div>
    </AuthContextProvider>
  );
};

export default App;
