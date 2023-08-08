//App.js est notre premier composant React
import '../styles/App.scss';
import Header from './header';
import Footer from './footer';
import Router from './routeur'; // Importe ton composant Router ici


function App() {
  return (
    <>
      <Header />
      <Router />  
      <Footer />
    </>
  );
}

export default App;
