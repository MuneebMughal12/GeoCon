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
import Contact from "./Pages/Contact";
import Bloges from "./Pages/Bloges";
import Gellary from "./Pages/Gellary";
import Exterior from "./Pages/Exterior";
import Interior from "./Pages/Interior";
import ThreeDFloor from "./Pages/ThreeDFloor";
import Pix from "./Pages/Pix";
import VisualDesign from "./Pages/VisualDesign";
import WebDesign from "./Pages/WebDesign";
import LivePresenter from "./Pages/LivePresenter";
import Tvc from "./Pages/Tvc";
import Fourk from "./Pages/Fourk";
import Virtualwalk from "./Pages/Virtualwalk";


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
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Bloges />} />
        <Route path='/portfolio/gallery' element={<Gellary />} />
        <Route path='/gallery/exterior-renderings' element={<Exterior />} />
        <Route path='/gallery/interior-renderings' element={<Interior />} />
        <Route path='/gallery/3d-floor-plans' element={<ThreeDFloor />} />
        <Route path='/gallery/pix-touch' element={<Pix />} />
        <Route path='/gallery/visual-design' element={<VisualDesign />} />
        <Route path='/gallery/web-design' element={<WebDesign />} />
        <Route path='/gallery/live-presenter' element={<LivePresenter />} />
        <Route path='/gallery/tvc' element={<Tvc />} />
        <Route path='/gallery/4k-ultra-hd-rendering' element={<Fourk />} />
        <Route path='/gallery/virtual-walkthrough' element={<Virtualwalk />} />
        
        
      
      </Routes>
      
    </div>
    <Footer/>
  </Router>
  
  );
}

export default App;
