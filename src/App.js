import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Head from './components/Head/Head';
import { AuthContextProvider } from './contexts/AuthContext/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <div className="App">
        <Head className={"head"} />
        <Body className={"body"} />
        <Footer className={"footer"} />
      </div>
    </AuthContextProvider>
  );
};

export default App;
