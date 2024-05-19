import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Beranda from "./Pages/Beranda";
import Adopsi from "./Pages/Adopsi";
import AdopsiDetail from "./Pages/AdopsiDetail";
import Artikel from "./Pages/Artikel";
import Kontak from "./Pages/Kontak";
import Komunitas from "./Pages/Komunitas";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/adopsi" element={<Adopsi />} />
            <Route path="/adopsi-detail" element={<AdopsiDetail />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/komunitas" element={<Komunitas />} />
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default App;
