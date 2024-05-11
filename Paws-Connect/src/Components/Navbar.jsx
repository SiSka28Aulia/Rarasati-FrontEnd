import React from "react";
import { logo1, logo2, search } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="box-logo">
          <div className="group-logo">
            <div className="icon-logo">
              <img src={logo1} alt="logo1" className="logo1" />
              <img src={logo2} alt="logo2" className="logo2" />
            </div>
            <Link to="/" className="logo">
              Paws Connect
            </Link>
          </div>
        </div>
        <div className="navbar">
          <Link to="/" className="nav-link">
            Beranda
          </Link>
          <Link to="/adopsi" className="nav-link">
            Adopsi
          </Link>
          <Link to="/artikel" className="nav-link">
            Artikel
          </Link>
          <Link to="/kontak" className="nav-link">
            Kontak
          </Link>
          <Link to="/komunitas" className="nav-link">
            Komunitas
          </Link>
        </div>
        <div className="search-box">
          <div className="search-icon">
            <img
              src="./src/assets/search.svg"
              alt="search"
              className="search-png"
            />
            <input type="text" placeholder="Cari" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
