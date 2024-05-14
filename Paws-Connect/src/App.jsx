import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Beranda from "./Pages/Beranda";
import Adopsi from "./Pages/Adopsi";
import Artikel from "./Pages/Artikel";
import Kontak from "./Pages/Kontak";
import Komunitas from "./Pages/Komunitas";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/adopsi" element={<Adopsi />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/komunitas" element={<Komunitas />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
