import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const location = useLocation();
  const wrongPath = location.pathname;

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">
  "<strong>{wrongPath}</strong>" adlı sayfa bulunamadı. Lütfen URL’yi kontrol edin ya da ana sayfaya dönün.
</p>

        <Link to="/" className="notfound-btn">Ana Sayfaya Dön</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
