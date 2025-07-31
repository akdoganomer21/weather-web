import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [progress, setProgress] = useState(100);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setProgress(100);

    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          setSuccess(false);
          return 0;
        }
        return prev - 2;
      });
    }, 100);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Helmet>
  <title>İletişim | Hava Durumu</title>
  <meta name="description" content="Hava Durumu ekibiyle iletişime geçin. Destek ve geri bildirimler için bize ulaşın." />
  <meta property="og:title" content="İletişim | Hava Durumu" />
  <meta property="og:description" content="Hava Durumu ekibiyle iletişime geçin. Geri bildirimlerinizi paylaşın." />
  <meta property="og:image" content="http://localhost:3000/image.jpeg" />
  <meta property="og:url" content="http://localhost:3000/sehir/iletisim" />
  <meta name="twitter:title" content="İletişim | Hava Durumu" />
  <meta name="twitter:description" content="Hava Durumu ekibine ulaşmak için iletişim sayfasını ziyaret edin." />
  <meta name="twitter:image" content="http://localhost:3000/image.jpeg" />
      </Helmet>


      <div className="contact-container">
        <h2>İletişim</h2>
        <p>
          📩 Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.
          Her türlü öneri, geri bildirim ve teknik destek için buradayız!
        </p>

        <div className="contact-info">
          <p><strong>📧 E-posta:</strong> akdoganomer42621@gmail.com</p>
          <p><strong>📞 Telefon:</strong> +90 537 204 01 91</p>
          <p><strong>📍 Adres:</strong> Mersin Teknokent, Türkiye</p>
        </div>

        {success && (
          <div className="success-message">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            ✅ Mesajınız iletildi!
          </div>
        )}

        <h3>Bize Yazın</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Adınız"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="E-posta"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Mesajınız"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Gönder</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
