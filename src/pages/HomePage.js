import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getWeather } from "../services/weatherApi";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import HourlyForecast from "../components/HourlyForecast";
import DailyForecast from "../components/DailyForecast";
import { Helmet } from "react-helmet";
import "../App.css";

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
  const [city, setCity] = useState(routeCity || "Diyarbakır");
  const [input, setInput] = useState(routeCity || "Diyarbakır");
  const [filteredCities, setFilteredCities] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    const data = await getWeather(cityName);
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (routeCity && cities.includes(routeCity.charAt(0).toUpperCase() + routeCity.slice(1))) {
      setCity(routeCity);
      setInput(routeCity);
      fetchWeather(routeCity);
    } else {
      setCity("Diyarbakır");
      setInput("Diyarbakır");
      fetchWeather("Diyarbakır");
    }
  }, [routeCity]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    const matches = cities.filter((c) =>
      c.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredCities(value.length > 0 ? matches : []);
  };

  const handleSelectCity = (selectedCity) => {
    navigate(`/sehir/${selectedCity.toLowerCase()}`);
    setFilteredCities([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const match = cities.find((c) => c.toLowerCase() === input.trim().toLowerCase());
    if (match) {
      navigate(`/sehir/${match.toLowerCase()}`);
    } else {
      alert("Lütfen geçerli bir şehir adı girin.");
    }
  };

  return (
    <div className="main-container">
      <Helmet>
        <title>{city} Hava Durumu | Ana Sayfa</title>
      </Helmet>

      <div className="search-section">
        <h1 className="page-title">📍 {city} Hava Durumu Bilgileri</h1>
        <p className="page-subtitle">Şehrinizi seçin, anlık durumu ve haftalık tahmini hemen öğrenin.</p>

        <form onSubmit={handleSubmit} className="search-form" autoComplete="off">
          <input
            type="text"
            placeholder="Şehir girin..."
            value={input}
            onChange={handleInputChange}
          />
          <button type="submit">Göster</button>
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
