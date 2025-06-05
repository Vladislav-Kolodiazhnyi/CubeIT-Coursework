import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./News.css";

function News() {
  const [newsData, setNewsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://cubeit-api.onrender.com/news")
      .then((res) => {
        const latestNews = res.data.slice(0, 9);
        setNewsData(latestNews);
      })
      .catch((err) => {
        console.error("Помилка при завантаженні новин:", err);
      });
  }, []);

  const goToNewsPage = () => {
    navigate("/news");
  };

  return (
    <div className="news-section">
      <div className="news-header">
        <h2 className="news-heading">Новини</h2>
        <button className="all-news-button" onClick={goToNewsPage}>
          Усі новини
        </button>
      </div>

      <div className="news-grid">
        {newsData.map((news) => (
          <div className="news-card" key={news.id}>
            <div className="news-overlay">
              <img
                src={news.image}
                alt={news.title}
                className="news-image"
                onClick={goToNewsPage}
              />
              <button className="read-button" onClick={goToNewsPage}>
                Читати
              </button>
            </div>
            <h3 className="news-title">{news.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
