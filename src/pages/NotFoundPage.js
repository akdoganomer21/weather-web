import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Üzgünüz, aradığınız sayfa bulunamadı.</p>
      <Link to="/" className="notfound-btn">Ana Sayfaya Dön</Link>
    </div>
  );
};

export default NotFoundPage;
