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

// Şehir listesi
const cities = [
  "Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın",
  "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale",
  "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan",
  "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay",
  "Iğdır", "Isparta", "İstanbul", "İzmir", "Kahramanmaraş", "Karabük", "Karaman",
  "Kars", "Kastamonu", "Kayseri", "Kırıkkale", "Kırklareli", "Kırşehir", "Kilis",
  "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla",
  "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun",
  "Siirt", "Sinop", "Sivas", "Şanlıurfa", "Şırnak", "Tekirdağ", "Tokat", "Trabzon",
  "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
];

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

  useEffect(() => {
    const normalizedParam = normalizeText(routeCity || "");
  
    if (!routeCity) {
      // Eğer URL boşsa, Diyarbakır’a yönlendir
      navigate("/sehir/diyarbakir", { replace: true });
      return;
    }
  
    const matchedCity = cities.find(
      (c) => normalizeText(c) === normalizedParam
    );
  
    if (matchedCity) {
      setCity(matchedCity);
      setInput(matchedCity);
      fetchWeather(matchedCity);  // ⬅️ Bu garanti
    } else {
      navigate("/sehir/diyarbakir", { replace: true });
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
    } else {
      alert("Lütfen geçerli bir şehir adı girin.");
    }
  };

  return (
    <div className="main-container">
<Helmet>
  <title>Hava Durumu | Türkiye Genelinde Tahmin</title>
  <meta name="description" content="Türkiye genelinde anlık, saatlik ve haftalık hava durumu tahminlerini modern arayüzle keşfedin." />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Hava Durumu | Ana Sayfa" />
  <meta property="og:description" content="Türkiye genelinde hava durumu tahminleri. Anlık, saatlik ve haftalık verilerle bilgi alın." />
  <meta property="og:image" content="https://seninsite.netlify.app/image.jpeg" />
  <meta property="og:url" content="https://seninsite.netlify.app/" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Hava Durumu | Türkiye Genelinde Tahmin" />
  <meta name="twitter:description" content="Modern arayüzle hava durumu tahminlerini inceleyin." />
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
            {console.log("📦 Weather state güncellendi:", weather)}
            {console.log("🌆 Seçilen şehir:", city)}
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
