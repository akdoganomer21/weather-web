import React from "react";
import "./HourlyForecast.css";

const HourlyForecast = ({ data }) => {
  const morning = data.filter((item) => {
    const hour = parseInt(item.time.split(":")[0]);
    return hour < 12;
  });

  const afternoon = data.filter((item) => {
    const hour = parseInt(item.time.split(":")[0]);
    return hour >= 12;
  });

  return (
    <div className="hourly-forecast">
      <h2>📊 24 Saatlik Hava Tahmini</h2>

      <h3 className="hour-group-title">🌙 00:00 - 11:59 Arası Hava Durumu</h3>
      <div className="forecast-row">
        {morning.map((hour, index) => (
          <div
            key={index}
            className={`hour-card ${hour.isMax ? "hour-max" : ""} ${
              hour.isMin ? "hour-min" : ""
            }`}
          >
            <div className="hour-time">{hour.time}</div>
            <div className="hour-temp">{hour.temp}°C</div>
            <div className="hour-humidity">{hour.humidity}%</div>
            <div className="hour-cloud">{hour.cloud}%</div>
            <div className="hour-rain">{hour.rainChance}%</div>
          </div>
        ))}
      </div>

      <h3 className="hour-group-title">🌞 12:00 - 23:59 Arası Hava Durumu</h3>
      <div className="forecast-row">
        {afternoon.map((hour, index) => (
          <div
            key={index}
            className={`hour-card ${hour.isMax ? "hour-max" : ""} ${
              hour.isMin ? "hour-min" : ""
            }`}
          >
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
