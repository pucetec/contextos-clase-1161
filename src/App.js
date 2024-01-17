import Body from './components/body/body';
import Footer from './components/footer/footer';
import Head from './components/head/head';
import { AuthContextProvider } from './contexts/AuthContext';

const  App=()=> {
  const email="bryan@sad";
  return (
    <AuthContextProvider>
      <div style={{textAlign:"center"}}>
      <Head />
      <Body />
      <Footer />
    </div>
    </AuthContextProvider>
    
  );
}

export default App;
