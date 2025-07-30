// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Yalnızca en üstteyken göster
      if (window.scrollY <= 10) {
        setVisible(true);
      } else {
        setVisible(false);
        setMenuOpen(false); // scroll edince menüyü kapat
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${visible ? "visible" : "hidden"}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          🌤 HavaDurumu
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Anasayfa</Link></li>
          <li><Link to="/hakkimizda" onClick={() => setMenuOpen(false)}>Hakkımızda</Link></li>
          <li><Link to="/iletisim" onClick={() => setMenuOpen(false)}>İletişim</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
