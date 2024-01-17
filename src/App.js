import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import { AuthContextsProvider } from "./contexts/AuthContext";

const App = () => {
  const email = "kfbuitron@puce.edu.ec";
  return (
   <AuthContextsProvider>
    <div style={{ textAlign: "center" }}>
      <Head email={email} />
      <Body email={email} />
      <Footer email={email} />
    </div>
    </AuthContextsProvider>
  );
}

export default App;
