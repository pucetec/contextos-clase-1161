import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import { AuthContextProvider } from "./contexts/AuthContext";


const App = () => {
  return (
    <AuthContextProvider>
      <div style={{textAlign: "center"}}>
        <Head></Head>
        <Body></Body>
        <Footer></Footer>
      </div>
    </AuthContextProvider>
  );
}

export default App;
