// src/pages/NotFoundPage.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = ({ notFoundPath }) => {
  const location = useLocation();
  const pathToShow = notFoundPath || location.pathname;

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1>404</h1>
        <p><strong>{pathToShow}</strong> adlı sayfa bulunamadı. Lütfen URL’yi kontrol edin ya da ana sayfaya dönün.</p>
        <Link to="/" className="notfound-btn">Ana Sayfaya Dön</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
