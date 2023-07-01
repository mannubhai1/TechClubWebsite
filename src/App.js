import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import DigitalWizards from "./pages/DigitalWizards";
import Ecell from './pages/Ecell/Ecell'
import Techmaniacs from "./pages/Techmaniacs";
import WingedVoyage from "./pages/WingedVoyage";
import SigmaSquad from "./pages/SigmaSquad";
import GaganVedhi from "./pages/GaganVedhi";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog/Blog";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digitalwizards" element={<DigitalWizards />} />
          <Route path="/ecell" element={<Ecell />} />
          <Route path="/gaganvedhi" element={< GaganVedhi/>} />
          <Route path="/sigmasquad" element={<SigmaSquad />} />
          <Route path="/techmaniacs" element={<Techmaniacs />} />
          <Route path="/wingedvoyage" element={<WingedVoyage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
