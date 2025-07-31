// src/pages/AboutPage.jsx
import React from "react";
import { Helmet } from "react-helmet";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <>
<Helmet>
  <title>Hakkımızda | Hava Durumu</title>
  <meta name="description" content="Hava Durumu projesi hakkında bilgi alın. Misyonumuz ve ekibimizle tanışın." />
  <meta property="og:title" content="Hakkımızda | Hava Durumu" />
  <meta property="og:description" content="Hava Durumu projesi, modern tahmin sistemiyle şehir şehir hava durumunu ayağınıza getirir." />
  <meta property="og:image" content="http://localhost:3000/image.jpeg" />
  <meta property="og:url" content="http://localhost:3000/hakkimizda" />
  <meta name="twitter:title" content="Hakkımızda | Hava Durumu" />
  <meta name="twitter:description" content="Hava Durumu ekibi, size en güncel hava bilgilerini sunmak için çalışıyor." />
  <meta name="twitter:image" content="http://localhost:3000/image.jpeg" />
</Helmet>


      <div className="about-container">
        <h1>ℹ️ Hakkımızda</h1>

        <section className="about-section">
          <p>
            <strong>HavaDurumu</strong>, Türkiye genelindeki kullanıcılar için sade, hızlı ve doğru hava tahminleri sunmak amacıyla oluşturulmuş web tabanlı bir platformdur.
            Gelişmiş altyapısı sayesinde kullanıcılar, şehir bazlı anlık verileri saniyeler içinde görebilir.
          </p>
        </section>

        <section className="about-section">
          <h2>
            <span className="about-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#0077b6" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L19 8.27L14.5 11.97L16 18L12 14.77L8 18L9.5 11.97L5 8.27L10.91 8.26L12 2Z" />
              </svg>
            </span>
            Misyonumuz
          </h2>
          <p>
            Her yaştan kullanıcının kolayca hava durumunu anlayabileceği, görsel olarak sade ve bilgilendirici bir deneyim sunmak.
          </p>
        </section>

        <section className="about-section">
          <h2>
            <span className="about-icon">
              <svg width="24" height="24" fill="#0077b6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12H20C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4V2Z" />
              </svg>
            </span>
            Vizyonumuz
          </h2>
          <p>
            Türkiye’nin en güvenilir hava durumu servisi olmak ve zamanla dünya genelindeki şehirleri de destekleyen bir platforma dönüşmek.
          </p>
        </section>

        <section className="about-section">
          <h2>
            <span className="about-icon">
              <svg width="24" height="24" fill="#0077b6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.14,12.94 C19.19,12.64 19.22,12.33 19.22,12 C19.22,11.67 19.19,11.36 19.14,11.06 L21.19,9.47 C21.33,9.36 21.38,9.15 21.3,8.97 L19.3,5.03 C19.22,4.85 19.03,4.77 18.85,4.82 L16.43,5.45 C16,5.17 15.52,4.95 15,4.8 L14.59,2.24 C14.56,2.11 14.44,2 14.31,2 H9.69 C9.56,2 9.44,2.11 9.41,2.24 L9,4.8 C8.48,4.95 8,5.17 7.57,5.45 L5.15,4.82 C4.97,4.77 4.78,4.85 4.7,5.03 L2.7,8.97 C2.62,9.15 2.67,9.36 2.81,9.47 L4.86,11.06 C4.81,11.36 4.78,11.67 4.78,12 C4.78,12.33 4.81,12.64 4.86,12.94 L2.81,14.53 C2.67,14.64 2.62,14.85 2.7,15.03 L4.7,18.97 C4.78,19.15 4.97,19.23 5.15,19.18 L7.57,18.55 C8,18.83 8.48,19.05 9,19.2 L9.41,21.76 C9.44,21.89 9.56,22 9.69,22 H14.31 C14.44,22 14.56,21.89 14.59,21.76 L15,19.2 C15.52,19.05 16,18.83 16.43,18.55 L18.85,19.18 C19.03,19.23 19.22,19.15 19.3,18.97 L21.3,15.03 C21.38,14.85 21.33,14.64 21.19,14.53 L19.14,12.94 Z M12,15.5 C10.07,15.5 8.5,13.93 8.5,12 C8.5,10.07 10.07,8.5 12,8.5 C13.93,8.5 15.5,10.07 15.5,12 C15.5,13.93 13.93,15.5 12,15.5 Z" />
              </svg>
            </span>
            Teknolojiler
          </h2>
          <ul className="tech-list">
            <li>⚛️ React tabanlı modern kullanıcı arayüzü</li>
            <li>☁️ Ücretsiz ve hızlı <code>goweather</code> API ile anlık veri çekimi</li>
            <li>📱 Tam mobil uyumlu responsive tasarım</li>
            <li>🧩 Açık kaynak felsefesiyle geliştirilmeye açıktır</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>
            <span className="about-icon">
              <svg width="24" height="24" fill="#0077b6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17a2 2 0 0 0 2-2v-1a2 2 0 0 0-4 0v1a2 2 0 0 0 2 2Zm6-7h-1V7a5 5 0 0 0-10 0v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2ZM8 7a4 4 0 1 1 8 0v3H8V7Zm10 13H6v-8h12v8Z" />
              </svg>
            </span>
            Gizlilik & Güvenlik
          </h2>
          <p>
            Kullanıcıdan hiçbir kişisel bilgi alınmaz. Uygulama sadece lokasyon bazlı çalışır ve veri takibi yapmaz.
            Veriler yalnızca gösterim amaçlı anlık olarak alınır.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
