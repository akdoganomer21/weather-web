// src/components/HourlyForecast.js
import React from "react";
import "./HourlyForecast.css";

const HourlyForecast = ({ data }) => {
  // 6'şarlı gruplara ayır (mobil uyumlu satırlar için)
  const chunked = [
    data.slice(0, 6),
    data.slice(6, 12),
    data.slice(12, 18),
    data.slice(18, 24)
  ];

  // En yüksek ve en düşük sıcaklıkları bul
  const maxTemp = Math.max(...data.map(item => item.temp));
  const minTemp = Math.min(...data.map(item => item.temp));

  return (
    <div className="hourly-forecast">
      <h2>⏰ 24 Saatlik Tahmin</h2>

      {chunked.map((chunk, i) => (
        <div className="forecast-row" key={i}>
          {chunk.map((item, j) => {
            const isMax = item.temp === maxTemp;
            const isMin = item.temp === minTemp;

            return (
              <div
                key={j}
                className={`hour-card ${isMax ? "hour-max" : ""} ${isMin ? "hour-min" : ""}`}
                title={
                  isMax
                    ? "Günün en sıcak saati"
                    : isMin
                    ? "Günün en soğuk saati"
                    : ""
                }
              >
                <div className="hour-time">{item.time}</div>
                <div className="hour-temp">{item.temp}°C</div>
                <div className="hour-humidity">💧 {item.humidity}%</div>
                <div className="hour-cloud">☁️ {item.cloud}%</div>
                <div className="hour-rain">🌧 {item.rainChance}%</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
