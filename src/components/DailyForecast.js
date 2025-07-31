// src/components/DailyForecast.js
import React from "react";
import "./DailyForecast.css";

// Emoji tabanlı ikon eşlemesi
const getWeatherIcon = (desc) => {
  const key = (desc || "").toLowerCase().trim();
  const icons = {
    "açık": "☀️",
    "az bulutlu": "🌤️",
    "parçalı bulutlu": "⛅",
    "bulutlu": "☁️",
    "kapalı": "🌥️",
    "çisenti": "🌦️",
    "hafif yağmur": "🌧️",
    "sağanak yağmur": "🌧️",
    "gök gürültülü": "⛈️",
    "hafif kar": "🌨️",
    "kar yağışlı": "❄️",
    "sisli": "🌫️",
    "yoğun sis": "🌫️",
    "bilinmeyen": "❓"
  };
  return icons[key] || icons["bilinmeyen"];
};

// Görsel efekt sınıfı
const getTempClass = (day) => {
  const isRainy = (day.description || "").includes("yağmur") || day.description.includes("çisenti");
  if (day.max >= 35) return "hot fire-anim";
  if (day.max <= 2) return "cold ice-anim";
  if (isRainy) return "rainy-anim";
  if (day.max >= 28) return "warm";
  if (day.max >= 18) return "mild";
  return "cold";
};

const DailyForecast = ({ data }) => {
  const forecast = data.slice(1); // Bugün hariç göster

  return (
    <div className="daily-forecast">
      <h2>📆 Haftalık Hava Durumu Tahmini</h2>
      <div className="daily-grid">
        {forecast.map((day, index) => {
          const tempClass = getTempClass(day);
          const targetDate = new Date();
          targetDate.setDate(targetDate.getDate() + index + 1);
          const formattedDate = targetDate.toLocaleDateString("tr-TR", {
            day: "numeric",
            month: "long"
          });

          return (
            <div key={index} className={`daily-card ${tempClass}`}>
              <div className="day-name">{day.day}</div>
              <div className="day-date">📅 {formattedDate}</div>

              <div className="day-icon" title={day.description}>
                {getWeatherIcon(day.description)}
              </div>

              <div className="temp-range">
                <div className="temp-box" title={`En sıcak saat: ${day.maxTime}`}>
                  <span className="high">{day.max}°C</span>
                  <span className="temp-time">({day.maxTime})</span>
                </div>
                <div className="temp-box" title={`En soğuk saat: ${day.minTime}`}>
                  <span className="low">{day.min}°C</span>
                  <span className="temp-time">({day.minTime})</span>
                </div>
              </div>

              <div className="day-desc">{day.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
