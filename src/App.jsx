import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./index.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Container>
        <Landing />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
