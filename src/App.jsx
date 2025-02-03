import Navbar from "./container/Navbar";
// import Contactus from "./container/Contact";
import "./App.css";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </>
  );
}

export default App;
