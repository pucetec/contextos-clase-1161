import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Head/Header";
import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  const email = "dsconsta@test.com";
  return (
    <AuthContextProvider>
      <div style={{ textAlign: "center" }}>
        <Header />
        <Body email={email} />
        <Footer email={email} />
      </div>
    </AuthContextProvider>
  );
};

export default App;
