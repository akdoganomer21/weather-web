import React from "react";
import "./HourlyForecast.css";

const HourlyForecast = ({ data }) => {
  // 🔥 Tüm saatlik veriden en sıcak ve en soğuk olanı bul
  const maxTemp = Math.max(...data.map((h) => h.temp));
  const minTemp = Math.min(...data.map((h) => h.temp));

  const morning = data.filter((item) => {
    const hour = parseInt(item.time.split(":")[0]);
    return hour < 12;
  });

  const afternoon = data.filter((item) => {
    const hour = parseInt(item.time.split(":")[0]);
    return hour >= 12;
  });

  const getCardClass = (hour) => {
    let classes = "hour-card";
    if (hour.temp === maxTemp) classes += " hour-max";
    if (hour.temp === minTemp) classes += " hour-min";
    return classes;
  };

  return (
    <div className="hourly-forecast">
      <h2>📊 24 Saatlik Hava Tahmini</h2>

      <h3 className="hour-group-title">🌙 Öğleden Önce (00:00 - 11:59) Hava Durumu</h3>
      <div className="forecast-row">
        {morning.map((hour, index) => (
          <div key={index} className={getCardClass(hour)}>
            <div className="hour-time">{hour.time}</div>
            <div className="hour-temp">{hour.temp}°C</div>
            <div className="hour-humidity">{hour.humidity}%</div>
            <div className="hour-cloud">{hour.cloud}%</div>
            <div className="hour-rain">{hour.rainChance}%</div>
          </div>
        ))}
      </div>

      <h3 className="hour-group-title">🌞 Öğleden Sonra (12:00 - 23:59) Hava Durumu</h3>
      <div className="forecast-row">
        {afternoon.map((hour, index) => (
          <div key={index} className={getCardClass(hour)}>
            <div className="hour-time">{hour.time}</div>
            <div className="hour-temp">{hour.temp}°C</div>
            <div className="hour-humidity">{hour.humidity}%</div>
            <div className="hour-cloud">{hour.cloud}%</div>
            <div className="hour-rain">{hour.rainChance}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
