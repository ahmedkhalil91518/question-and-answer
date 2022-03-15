import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import About from "./components/About";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
