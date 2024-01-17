import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  const email = "juemtest.com";

  return (
    <AuthContextProvider>
    <div>
      <Head email={email} />
      <Body email={email} />
      <Footer email={email} />
    </div>
    </AuthContextProvider>
  );

};

export default App;
