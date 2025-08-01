// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getWeather } from "../services/weatherApi";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import HourlyForecast from "../components/HourlyForecast";
import DailyForecast from "../components/DailyForecast";
import { Helmet } from "react-helmet";
import "../App.css";
// normalizeText fonksiyonunu import et
import { normalizeText } from "../utils/normalizeText";
import { cities } from "../data/cities";




function HomePage() {
  const { city: routeCity } = useParams();
  const navigate = useNavigate();

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Diyarbakır");
  const [input, setInput] = useState("Diyarbakır");
  const [filteredCities, setFilteredCities] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const fetchWeather = async (cityName) => {
    setLoading(true);
    const data = await getWeather(cityName);
    setWeather(data);
    setLoading(false);
  };
  const [showWarning, setShowWarning] = useState(false);
const [warningText, setWarningText] = useState("");


  useEffect(() => {
    const normalizedParam = normalizeText(routeCity || "");
  
    if (!routeCity) {
      navigate("/sehir/diyarbakir", { replace: true });
      return;
    }
  
    const matchedCity = cities.find(
      (c) => normalizeText(c) === normalizedParam
    );
  
    if (matchedCity) {
      setCity(matchedCity);
      setInput(matchedCity);
      fetchWeather(matchedCity);
    } else {
      // 🔥 Bu satır sayesinde YANLIŞ LINK girildiğinde 404 sayfasına yönlendiriliyor
      navigate("/404", { replace: true });
    }
  }, [routeCity, navigate]);
  
  
  
  
  

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    const matches = cities.filter((c) =>
      normalizeText(c).startsWith(normalizeText(value))
    );
    setFilteredCities(value.length > 0 ? matches : []);
  };

  const handleSelectCity = (selectedCity) => {
    navigate(`/sehir/${normalizeText(selectedCity)}`);
    setFilteredCities([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const match = cities.find(
      (c) => normalizeText(c) === normalizeText(input.trim())
    );
    if (match) {
      navigate(`/sehir/${normalizeText(match)}`);
      fetchWeather(match); // ⬅️ Aynı şehirse bile veriyi tazele
      setCity(match);      // ⬅️ State’i güncelle
      setFilteredCities([]); // 🔥 öneri listesini temizle
    }
     else {
      setWeather(null);
      setWarningText("Lütfen geçerli bir şehir adı girin.");
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 4000);
    }
  };
  

  return (
    <div className="main-container">
    <Helmet>
  <title>{city} Hava Durumu | Anlık, Saatlik ve Haftalık Tahmin</title>
  <meta name="description" content={`${city} için hava durumu tahminlerini anlık, saatlik ve haftalık olarak öğrenin.`} />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content={`${city} Hava Durumu | Hızlı Tahmin`} />
  <meta property="og:description" content={`${city} hava durumu: detaylı, anlık ve haftalık bilgiler burada.`} />
  <meta property="og:image" content="https://seninsite.netlify.app/image.jpeg" />
  <meta property="og:url" content={`https://seninsite.netlify.app/sehir/${normalizeText(city)}`} />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={`${city} Hava Durumu | Türkiye Geneli`} />
  <meta name="twitter:description" content={`Türkiye genelinde ${city} için güncel hava durumu verileri.`} />
  <meta name="twitter:image" content="https://seninsite.netlify.app/image.jpeg" />
    </Helmet>




      <div className="search-section">
        <h1 className="page-title">📍 {city} Hava Durumu Bilgileri</h1>
        <p className="page-subtitle">Şehrinizi seçin, anlık durumu ve haftalık tahmini hemen öğrenin.</p>
        
        <form
  onSubmit={handleSubmit}
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
  }}
  autoComplete="off"
>
  <input
    type="text"
    placeholder="Şehir girin..."
    value={input}
    onChange={handleInputChange}
    style={{
      padding: "14px 20px",
      fontSize: "18px",           // Şehir adı büyük
      border: "2px solid #0077b6",
      borderRadius: "8px",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",        // Yazıyı ortala
      boxShadow: "0 2px 6px rgba(0,119,182,0.1)",
    }}
  />
  <button
    type="submit"
    style={{
      padding: "14px 20px",
      fontSize: "16px",
      backgroundColor: "#0077b6",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      width: "100%",
      maxWidth: "400px",
      cursor: "pointer",
    }}
  >
    Göster
  </button>
  {showWarning && (
  <div className="warning-banner">
    <span>{warningText}</span>
    <div className="warning-progress"></div>
  </div>
)}

        </form>


        {filteredCities.length > 0 && (
          <ul className="city-suggestions">
            {filteredCities.map((c, i) => (
              <li key={i} onClick={() => handleSelectCity(c)}>
                {c}
              </li>
            ))}
          </ul>
        )}
      </div>

      {loading ? (
        <p className="loading">⏳ Veriler yükleniyor...</p>
      ) : weather ? (
        <>
          <CurrentWeatherCard data={weather} />
          {Array.isArray(weather.hourly) && weather.hourly.length > 0 && (
            <HourlyForecast data={weather.hourly} />
          )}
          {Array.isArray(weather.daily) && weather.daily.length > 0 && (
            <DailyForecast data={weather.daily} />
          )}
        </>
      ) : (
        <p className="loading">⚠️ Veri alınamadı. Şehir adı hatalı olabilir.</p>
      )}
    </div>
  );
}

export default HomePage;
