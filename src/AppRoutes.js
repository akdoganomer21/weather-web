// src/AppRoutes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import { cities } from "./data/cities";
import { normalizeText } from "./utils/normalizeText";

// 🔹 Şehir doğrulaması burada yapılacak
const CityRouteWrapper = () => {
  const { city } = useParams();
  const isValidCity = cities.some(
    (c) => normalizeText(c) === normalizeText(city)
  );

  if (!isValidCity) {
    return <NotFoundPage notFoundPath={`/sehir/${city}`} />;
  }

  return <HomePage />;
};

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sehir/:city" element={<CityRouteWrapper />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
