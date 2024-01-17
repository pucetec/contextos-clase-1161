import './App.css';
import Head from './components/Head/Head';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { AuthContextProvider } from './contexts/AuthContext';



const App = () => {

  return (
    <AuthContextProvider>
    <div style= {{textAlign: "center"}}>
    <Head/>
    <Body/>
    <Footer/>
    </div>
    </AuthContextProvider>
  );
}

export default App;
