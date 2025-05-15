import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";

import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Servicess from "./Pages/Servicess";
import ThreeDWalkthrough  from "./Pages/ThreeDWalkthrough";
import Visual  from "./Pages/Visual";
import Live from "./Pages/Live";
import Digital from "./Pages/Digital";
import Web from "./Pages/Web";
import Potfoli from "./Pages/Potfoli";

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
        <Route path="/Services/3d-Walkthrough" element={<ThreeDWalkthrough />} />
        <Route path="/services/live-presenter" element={<Live />} />
        <Route path="/services/visual-design" element={<Visual />} />
        <Route path="/services/digital-compositing" element={<Digital />} />
        <Route path="/services/web-design" element={<Web />} />
        <Route path='/portfolio/projects' element={<Potfoli />} />
        
        
      
      </Routes>
      
    </div>
    <Footer/>
  </Router>
  
  );
}

export default App;
