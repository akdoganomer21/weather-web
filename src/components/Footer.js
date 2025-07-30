// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section brand">
          <h2>🌤 HavaDurumu</h2>
          <p>Türkiye genelinde hızlı ve güvenilir hava durumu tahminleri.</p>
          <p className="footer-social">
            <a href="#" onClick={() => window.scrollTo(0, 0)}><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" onClick={() => window.scrollTo(0, 0)}><i className="fa-brands fa-twitter"></i></a>
            <a href="#" onClick={() => window.scrollTo(0, 0)}><i className="fa-brands fa-instagram"></i></a>
          </p>
        </div>

        <div className="footer-section links">
          <h4>Sayfalar</h4>
          <ul>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Ana Sayfa</Link></li>
            <li><Link to="/hakkimizda" onClick={() => window.scrollTo(0, 0)}>Hakkımızda</Link></li>
            <li><Link to="/iletisim" onClick={() => window.scrollTo(0, 0)}>İletişim</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>İletişim</h4>
          <p><strong>📧</strong> akdoganomer42621@gmail.com</p>
          <p><strong>📞</strong> +90 537 204 01 91</p>
          <p><strong>📍</strong> Mersin Teknokent, Türkiye</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HavaDurumu. Tüm hakları saklıdır.</p>
        <p className="footer-warning">⚠️ Bu uygulama demo amaçlıdır, resmi meteoroloji verisi içermez.</p>
      </div>
    </footer>
  );
};

export default Footer;
