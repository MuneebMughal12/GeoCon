import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";

import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Servicess from "./Pages/Servicess";

function App() {
  return (
    <Router>
    <div>
    <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Servicess />} />
      
      </Routes>
    </div>
    <Footer/>
  </Router>
  
  );
}

export default App;
