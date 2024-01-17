import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  const email = "josue@gmai.com";
  return (
    <AuthContextProvider>
      <div style={{ textAlign: "center" }}>
        <Head email={email}></Head>
        <Body email={email}></Body>
        <Footer email={email}></Footer>
      </div>
    </AuthContextProvider>
  );
};

export default App;
