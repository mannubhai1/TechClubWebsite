import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import DigitalWizards from "./pages/DigitalWizards";
import ECell from "./pages/ECell";
import Techmaniacs from "./pages/Techmaniacs";
import WingedVoyage from "./pages/WingedVoyage";
import SigmaSquad from "./pages/SigmaSquad";
import GaganVedhi from "./pages/GaganVedhi";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digitalwizards" element={<DigitalWizards />} />
          <Route path="/ecell" element={<ECell />} />
          <Route path="/gaganvedhi" element={< GaganVedhi/>} />
          <Route path="/sigmasquad" element={<SigmaSquad />} />
          <Route path="/techmaniacs" element={<Techmaniacs />} />
          <Route path="/wingedvoyage" element={<WingedVoyage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
