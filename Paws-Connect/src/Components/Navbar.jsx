import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <Link to="/" className="logo">
          Paws Connect
        </Link>
        <div className="navbar">
          <Link to="/" className="nav-link">
            Beranda
          </Link>
          <Link to="/" className="nav-link">
            Adopsi
          </Link>
          <Link to="/" className="nav-link">
            Artikel
          </Link>
          <Link to="/" className="nav-link">
            Kontak
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
