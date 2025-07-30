// src/services/weatherApi.js
import axios from "axios";

// Koordinat eşleme
const cityCoords = {
  Adana: { lat: 37.0, lon: 35.3213 },
  Adıyaman: { lat: 37.7648, lon: 38.2786 },
  Afyonkarahisar: { lat: 38.7569, lon: 30.5387 },
  Ağrı: { lat: 39.7191, lon: 43.0503 },
  Aksaray: { lat: 38.3687, lon: 34.036 },
  Amasya: { lat: 40.6539, lon: 35.833 },
  Ankara: { lat: 39.9208, lon: 32.8541 },
  Antalya: { lat: 36.8969, lon: 30.7133 },
  Ardahan: { lat: 41.1105, lon: 42.7022 },
  Artvin: { lat: 41.1828, lon: 41.8194 },
  Aydın: { lat: 37.8481, lon: 27.8456 },
  Balıkesir: { lat: 39.6484, lon: 27.8826 },
  Bartın: { lat: 41.6358, lon: 32.3375 },
  Batman: { lat: 37.8812, lon: 41.1351 },
  Bayburt: { lat: 40.2552, lon: 40.2249 },
  Bilecik: { lat: 40.1428, lon: 29.9793 },
  Bingöl: { lat: 38.8854, lon: 40.4983 },
  Bitlis: { lat: 38.4003, lon: 42.1095 },
  Bolu: { lat: 40.576, lon: 31.5788 },
  Burdur: { lat: 37.7203, lon: 30.2908 },
  Bursa: { lat: 40.1956, lon: 29.0601 },
  Çanakkale: { lat: 40.1553, lon: 26.4142 },
  Çankırı: { lat: 40.6013, lon: 33.6134 },
  Çorum: { lat: 40.5489, lon: 34.953 },
  Denizli: { lat: 37.7765, lon: 29.0864 },
  Diyarbakır: { lat: 37.9144, lon: 40.2306 },
  Düzce: { lat: 40.8438, lon: 31.1565 },
  Edirne: { lat: 41.6818, lon: 26.5623 },
  Elazığ: { lat: 38.675, lon: 39.2205 },
  Erzincan: { lat: 39.75, lon: 39.5 },
  Erzurum: { lat: 39.9043, lon: 41.2679 },
  Eskişehir: { lat: 39.7843, lon: 30.5192 },
  Gaziantep: { lat: 37.0662, lon: 37.3833 },
  Giresun: { lat: 40.9128, lon: 38.3895 },
  Gümüşhane: { lat: 40.4603, lon: 39.4814 },
  Hakkari: { lat: 37.5733, lon: 43.7408 },
  Hatay: { lat: 36.2028, lon: 36.1605 },
  Iğdır: { lat: 39.9204, lon: 44.0465 },
  Isparta: { lat: 37.7648, lon: 30.5566 },
  İstanbul: { lat: 41.0082, lon: 28.9784 },
  İzmir: { lat: 38.4192, lon: 27.1287 },
  Kahramanmaraş: { lat: 37.5731, lon: 36.9371 },
  Karabük: { lat: 41.2061, lon: 32.6204 },
  Karaman: { lat: 37.1814, lon: 33.215 },
  Kars: { lat: 40.6167, lon: 43.1 },
  Kastamonu: { lat: 41.3887, lon: 33.7827 },
  Kayseri: { lat: 38.7225, lon: 35.4875 },
  Kırıkkale: { lat: 39.8468, lon: 33.5153 },
  Kırklareli: { lat: 41.7351, lon: 27.2255 },
  Kırşehir: { lat: 39.1458, lon: 34.1605 },
  Kilis: { lat: 36.7184, lon: 37.1212 },
  Kocaeli: { lat: 40.7654, lon: 29.9402 },
  Konya: { lat: 37.8746, lon: 32.4932 },
  Kütahya: { lat: 39.4242, lon: 29.9833 },
  Malatya: { lat: 38.3552, lon: 38.3095 },
  Manisa: { lat: 38.6191, lon: 27.4289 },
  Mardin: { lat: 37.3129, lon: 40.7351 },
  Mersin: { lat: 36.8000, lon: 34.6333 },
  Muğla: { lat: 37.2153, lon: 28.3636 },
  Muş: { lat: 38.9462, lon: 41.7539 },
  Nevşehir: { lat: 38.625, lon: 34.7122 },
  Niğde: { lat: 37.9667, lon: 34.6833 },
  Ordu: { lat: 40.9862, lon: 37.8797 },
  Osmaniye: { lat: 37.0742, lon: 36.2469 },
  Rize: { lat: 41.025, lon: 40.5176 },
  Sakarya: { lat: 40.7569, lon: 30.3781 },
  Samsun: { lat: 41.2867, lon: 36.33 },
  Şanlıurfa: { lat: 37.1674, lon: 38.7955 },
  Siirt: { lat: 37.9274, lon: 41.9453 },
  Sinop: { lat: 42.0267, lon: 35.1511 },
  Sivas: { lat: 39.7477, lon: 37.0179 },
  Şırnak: { lat: 37.4187, lon: 42.4918 },
  Tekirdağ: { lat: 40.978, lon: 27.511 },
  Tokat: { lat: 40.3139, lon: 36.5544 },
  Trabzon: { lat: 41.0015, lon: 39.7178 },
  Tunceli: { lat: 39.1083, lon: 39.5483 },
  Uşak: { lat: 38.6823, lon: 29.4082 },
  Van: { lat: 38.5012, lon: 43.416 },
  Yalova: { lat: 40.6556, lon: 29.2769 },
  Yozgat: { lat: 39.82, lon: 34.8044 },
  Zonguldak: { lat: 41.4564, lon: 31.7987 },
};



const weatherCodes = {
  0: "açık",
  1: "az bulutlu",
  2: "parçalı bulutlu",
  3: "kapalı",
  45: "sisli",
  48: "yoğun sis",
  51: "çisenti",
  53: "çisenti",
  55: "çisenti",
  56: "çisenti",
  57: "çisenti",
  61: "hafif yağmur",
  63: "hafif yağmur",
  65: "şiddetli yağmur",
  66: "hafif yağmur",
  67: "şiddetli yağmur",
  71: "hafif kar",
  73: "kar yağışlı",
  75: "yoğun kar",
  77: "kar yağışlı",
  80: "sağanak yağmur",
  81: "sağanak yağmur",
  82: "sağanak yağmur",
  85: "hafif kar",
  86: "yoğun kar",
  95: "gök gürültülü",
  96: "gök gürültülü",
  99: "gök gürültülü"
  
};


export const getWeather = async (city) => {
  try {
    const coords = cityCoords[city] || cityCoords["Adana"];
    const { lat, lon } = coords;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m,wind_direction_10m,surface_pressure,cloudcover,apparent_temperature,precipitation,precipitation_probability,temperature_2m&daily=temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset&timezone=auto`;


    const res = await axios.get(url);
    const current = res.data.current_weather;
    const hourly = res.data.hourly;
    const daily = res.data.daily;

    const now = new Date().toISOString().slice(0, 13); // örn: "2025-07-30T09"
    const index = hourly.time.findIndex((t) => t.startsWith(now));

    const dailyForecast = daily.time.map((date, i) => {
      const dayStart = `${date}T00:00`;
      const dayEnd = `${date}T23:59`;
    
      const dayIndexes = hourly.time.reduce((acc, time, idx) => {
        if (time >= dayStart && time <= dayEnd) acc.push(idx);
        return acc;
      }, []);
    
      const temps = dayIndexes.map(idx => ({
        temp: hourly.apparent_temperature[idx],
        time: hourly.time[idx]?.split("T")[1]?.slice(0, 5) || "--:--"
      }));
    
      // 🔧 1. Hatalı veri varsa bile description normalize edilmeli
      if (temps.length === 0) {
        return {
          day: new Date(date).toLocaleDateString("tr-TR", { weekday: "long" }),
          max: daily.temperature_2m_max[i],
          min: daily.temperature_2m_min[i],
          maxTime: "-",
          minTime: "-",
          description: (weatherCodes[daily.weathercode[i]] || "bilinmeyen").toLowerCase().trim()
        };
      }
    
      const minObj = temps.reduce((min, curr) => (curr.temp < min.temp ? curr : min), temps[0]);
      const maxObj = temps.reduce((max, curr) => (curr.temp > max.temp ? curr : max), temps[0]);
    
      // 🔧 2. Normal durumda da normalize et
      return {
        day: new Date(date).toLocaleDateString("tr-TR", { weekday: "long" }),
        max: daily.temperature_2m_max[i],
        min: daily.temperature_2m_min[i],
        maxTime: maxObj.time,
        minTime: minObj.time,
        description: (weatherCodes[daily.weathercode[i]] || "bilinmeyen").toLowerCase().trim()
      };
    });
    
    
    
    



    const hourlyForecast = [];
    for (let i = index; i < hourly.time.length && i < index + 24; i++) {
      if (hourly.time[i]) {
        const time = hourly.time[i].split("T")[1].slice(0, 5); // örn: "14:00"
        hourlyForecast.push({
          time,
          temp: hourly.apparent_temperature[i],
          humidity: hourly.relativehumidity_2m[i],
          cloud: hourly.cloudcover[i],
          rainChance: hourly.precipitation_probability[i] // ✅ bu satırı ekledik
        });
      }
    }
    
    


    return {
      temperature: current.temperature,
      wind: current.windspeed,
      windDirection: current.winddirection,
      humidity: hourly.relativehumidity_2m[index],
      pressure: hourly.surface_pressure[index],
      cloud: hourly.cloudcover[index],
      apparentTemp: hourly.apparent_temperature[index],
      rain: hourly.precipitation[index],
      sunrise: daily.sunrise[0].split("T")[1],
      sunset: daily.sunset[0].split("T")[1],
      description: weatherCodes[current.weathercode] || "Bilinmeyen",
      hourly: hourlyForecast,
      daily: dailyForecast
    };
    
  } catch (err) {
    console.error("API Hatası:", err);
    return null;
  }
};