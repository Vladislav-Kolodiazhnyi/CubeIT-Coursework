import React, { useEffect, useState } from "react";
import "./NewsPage.css";
import axios from "axios";

function NewsPage() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://cubeit-api.onrender.com/news")
      .then((res) => {
        setNewsItems(res.data);
      })
      .catch((err) => {
        console.error("Помилка при завантаженні новин:", err);
      });
  }, []);

  return (
    <div className="news-detail-page">
      <h1 className="news-detail-title">Новини</h1>
      <div className="news-detail-list">
        {newsItems.map((item) => (
          <div key={item._id} className="news-detail-item">
            <div className="news-detail-image-container">
              <img
                src={item.image}
                alt={item.title}
                className="news-detail-image"
              />
            </div>
            <div className="news-detail-content">
              <h2 className="news-detail-item-title">{item.title}</h2>
              <p className="news-detail-item-text">{item.text}</p>
              <div className="news-detail-meta">
                <span className="news-detail-date">{item.date}</span>
                <button className="news-detail-button">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
