// src/components/CurrentWeatherCard.js
import React from "react";
import "./CurrentWeatherCard.css";

// Hava açıklamaları çeviri
const descriptionMap = {
  "Clear": "Açık",
  "Partly cloudy": "Parçalı bulutlu",
  "Cloudy": "Bulutlu",
  "Overcast": "Kapalı",
  "Light rain": "Hafif yağmur",
  "Heavy rain": "Şiddetli yağmur",
  "Thunderstorm": "Gök gürültülü",
  "Snow": "Kar yağışlı",
  "Fog": "Sisli"
};

// Pusula yönü hesapla
const getCompass = (deg) => {
  const directions = ["K", "KD", "D", "GD", "G", "GB", "B", "KB"];
  return directions[Math.round(deg / 45) % 8];
};

// SVG ikonlar
const SunriseSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#f4a261" viewBox="0 0 24 24" style={{ marginRight: 6 }}>
    <path d="M12 3l3 3h-2v4h-2V6H9l3-3zm0 15c2.761 0 5-2.239 5-5h2a7 7 0 0 1-14 0h2c0 2.761 2.239 5 5 5z" />
  </svg>
);

const SunsetSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e76f51" viewBox="0 0 24 24" style={{ marginRight: 6 }}>
    <path d="M12 21l-3-3h2v-4h2v4h2l-3 3zm0-15c-2.761 0-5 2.239-5 5H5a7 7 0 0 1 14 0h-2c0-2.761-2.239-5-5-5z" />
  </svg>
);

// Hava durumu SVG ikon
const getWeatherIconSvg = (desc) => {
  const style = { marginRight: 6 };
  switch (desc) {
    case "Clear":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="#f4d35e" style={style}><circle cx="12" cy="12" r="5" /></svg>;
    case "Partly cloudy":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="#90e0ef" style={style}><path d="M6 14a6 6 0 0112 0H6z" /></svg>;
    case "Cloudy":
    case "Overcast":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="#adb5bd" style={style}><path d="M4 15h16v2H4z" /></svg>;
    case "Light rain":
    case "Heavy rain":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="#48cae4" style={style}><path d="M5 16h14l-2 4H7z" /></svg>;
    case "Thunderstorm":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="#f94144" style={style}><path d="M10 8h4l-3 4h3l-4 6v-4H8z" /></svg>;
    case "Snow":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="#adb5bd" style={style}><circle cx="12" cy="12" r="4" /></svg>;
    case "Fog":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="#ced4da" style={style}><path d="M4 10h16v2H4z M4 14h16v2H4z" /></svg>;
    default:
      return null;
  }
};

const CurrentWeatherCard = ({ data }) => {
  const {
    temperature,
    description,
    wind,
    windDirection,
    humidity,
    pressure,
    apparentTemp,
    cloud,
    rain,
    sunrise,
    sunset,
    minTemp,
    maxTemp,
    minTime,
    maxTime
  } = data;

  const formattedWind =
    typeof wind === "number" ? `${wind} km/h` :
    typeof wind === "string" && wind.includes("km") ? wind :
    `${wind} km/h`;

  const windDirectionLabel =
    windDirection !== undefined ? `${windDirection}° (${getCompass(windDirection)})` : "-";

  const currentTime = new Date().toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className="current-weather-card">
      <div className="current-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <h2 style={{ margin: 0 }}>🌡️ Anlık Hava Durumu</h2>
        <span style={{ fontSize: "20px", color: "blue" }}>SAAT: {currentTime}</span>
      </div>

      <div className="weather-grid">
        <div className="weather-item">
          <span className="label">Sıcaklık:</span>
          <span className="value">{temperature !== undefined ? `${temperature}°C` : "-"}</span>
        </div>
        <div className="weather-item">
          <span className="label">Hissedilen:</span>
          <span className="value">{apparentTemp !== undefined ? `${apparentTemp}°C` : "-"}</span>
        </div>
        <div className="weather-item">
          <span className="label">Rüzgar:</span>
          <span className="value">{formattedWind}</span>
        </div>
        <div className="weather-item">
          <span className="label">Rüzgar Yönü:</span>
          <span className="value">
            {windDirectionLabel}
            <svg className="wind-direction-svg" style={{ transform: `rotate(${windDirection || 0}deg)` }} viewBox="0 0 24 24">
              <path fill="#0077b6" d="M12 2L15 8H13V22H11V8H9L12 2Z" />
            </svg>
          </span>
        </div>
        <div className="weather-item humidity" style={{ "--humidity": humidity || 0 }}>
          <span className="label">Nem:</span>
          <span className="value">{humidity !== undefined ? `${humidity}%` : "-"}</span>
        </div>
        <div className="weather-item">
          <span className="label">Basınç:</span>
          <span className="value">{pressure !== undefined ? `${pressure} hPa` : "-"}</span>
        </div>
        <div className="weather-item">
          <span className="label">Bulutluluk:</span>
          <span className="value">{cloud !== undefined ? `${cloud}%` : "-"}</span>
        </div>
        <div className="weather-item">
          <span className="label">Yağış:</span>
          <span className="value">{rain !== undefined ? `${rain} mm` : "-"}</span>
        </div>
        <div className="weather-item">
          <span className="label"><SunriseSVG />Gün Doğumu:</span>
          <span className="value">{sunrise || "-"}</span>
        </div>
        <div className="weather-item">
          <span className="label"><SunsetSVG />Gün Batımı:</span>
          <span className="value">{sunset || "-"}</span>
        </div>
        <div className="weather-item">
          <span className="label">En Düşük:</span>
          <span className="value">{minTemp !== undefined ? `${minTemp}°C (${minTime})` : "-"}</span>
        </div>
        <div className="weather-item">
          <span className="label">En Yüksek:</span>
          <span className="value">{maxTemp !== undefined ? `${maxTemp}°C (${maxTime})` : "-"}</span>
        </div>
        <div className="weather-item">
          <span className="label">Durum:</span>
          <span className="value">
            {getWeatherIconSvg(description)}
            {descriptionMap[description] || description || "-"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
