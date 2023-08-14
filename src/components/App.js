import "../styles/App.scss";
import "../styles/global.scss";
import Header from "./header";
import Footer from "./footer";
import Router from "./routeur";

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
