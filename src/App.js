import { AuthContextProvider } from "./Contexts/AuthContext";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <AuthContextProvider>
      <div style={{ textAlign: "center" }}>
        <Header />
        <Body />
        <Footer />
      </div>
    </AuthContextProvider>
  );
};

export default App;
