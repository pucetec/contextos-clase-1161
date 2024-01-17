import Head from './component/Head/Head';
import Body from './component/Body/Body';
import Footer from './component/Footer/Footer';
import { AuthContextProvider } from './contexts/AuthContext';

const App = () => {
  const email = "lolo@mail.com";
  return (
    <AuthContextProvider>

    
      <div style={{ textAlign: "center" }}>
        <Head />
        <Body email = {email} />
        <Footer email = {email} />
        

      </div>
    </AuthContextProvider>
  );
};

export default App;
