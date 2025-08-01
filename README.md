# 🌤️ Türkiye Hava Durumu Uygulaması

Bu proje, Türkiye'deki tüm şehirler için **anlık**, **saatlik** ve **7 günlük hava durumu tahminleri** sunan modern ve duyarlı (responsive) bir hava durumu uygulamasıdır. Uygulama, [Open-Meteo](https://open-meteo.com/) tarafından sağlanan **gerçek verileri** kullanır ve saatlik olarak otomatik güncellenir.


-----------



## 🔗 Canlı Yayın

👉 [Uygulamayı Şimdi Görüntüle](https://hava-durumu-turkey.netlify.app)


-----------



## 🚀 Özellikler

- ✅ **Gerçek Zamanlı Hava Durumu Verisi** (Open-Meteo API üzerinden)
- 🔍 **Şehir Arama ve Otomatik Tamamlama (Autocomplete)**
- ⚠️ **Geçersiz şehir girişlerinde uyarı ve yönlendirme**
- 🌐 **Dinamik Link Sistemi** (`/sehir/:city`)
- 🧭 **404 Sayfası:** Geçersiz rota yönlendirmesi
- 📱 **Tamamen Mobil Uyumlu Tasarım**
- 🧠 **Akıllı URL Düzeltme ve Normalleştirme** (örn: `/isTAnBul` → `/İstanbul`)
- 🔗 **Sosyal Medya Önizleme Desteği** (OG + Twitter kartları)



-----------



## 🧪 Kullanılan Teknolojiler

| Teknoloji       | Açıklama                        |
|------------------|-----------------------------------|
| React.js         | Arayüz ve bileşen yapısı          |
| React Router v6  | Sayfa yönlendirme sistemi         |
| Open-Meteo API   | Hava durumu verileri              |
| Helmet           | SEO ve meta tag yönetimi          |
| Netlify          | Yayınlama ve dağıtım platformu    |



-----------



## ⚙️ Projeyi Yerelde Çalıştırma

Aşağıdaki adımları izleyerek projeyi bilgisayarınızda çalıştırabilirsiniz:

```bash
git clone https://github.com/akdoganomer21/weather-web.git
cd weather-web
npm install
npm start

-----------
## Klasöy yapısı 

weather-web/
├── public/
│   ├── index.html 
│   ├── manifest.json
│   ├── og-image.jpg
│   ├── location-icon.png
│   └── robots.txt
├── src/
│   ├── components/ 
│   ├── data/ 
│   ├── pages/           
│   ├── services/        
│   ├── utils/           
│   ├── App.js
│   └── AppRoutes.js
│   └── index.js
