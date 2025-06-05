import React, { useState } from "react";
import Hero from "../components/Hero";
import "./About.css";

function About() {
  const [expandedPublishItem, setExpandedPublishItem] = useState(null);
  const [expandedAudienceItem, setExpandedAudienceItem] = useState(null);

  const publishItems = [
    {
      title: "Актуальні ІТ-новини",
      details:
        "Ми оперативно висвітлюємо ключові події у світі інформаційних технологій: оновлення в компаніях, презентації продуктів, зміни в законодавстві ІТ-сфери, міжнародні конференції, релізи нових технологій, впровадження штучного інтелекту – усе, що формує сьогодення цифрової галузі.",
    },
    {
      title: "Поради для програмістів",
      details:
        "Ми ділимося підказками з оптимізації коду, кращими підходами до архітектури застосунків, короткими туторіалами, розбірками частих помилок та лайфхаками з використання фреймворків.",
    },
    {
      title: "Стартапи та технологічні тренди",
      details:
        "Висвітлюємо молоді ІТ-проєкти, які можуть змінити ринок, нові бізнес-моделі, технологічні стартапи в Україні та за кордоном. Ви дізнаєтесь про інновації до того, як про них заговорить масовий ринок.",
    },
    {
      title: "Програмне забезпечення та сервіси",
      details:
        "Огляди нових або оновлених програм, вебсервісів, інструментів для дизайну, автоматизації, розробки, безпеки, управління проєктами. Рекомендації включають і безкоштовні, і платні варіанти.",
    },
    {
      title: "Сучасні веб-технології",
      details:
        "Огляди нових або оновлених програм, вебсервісів, інструментів для дизайну, автоматизації, розробки, безпеки, управління проєктами. Рекомендації включають і безкоштовні, і платні варіанти.",
    },
  ];

  const audienceItems = [
    {
      title: "Професійні ІТ-спеціалісти",
      details:
        "Для розробників, DevOps, адміністраторів, аналітиків – наш портал є постачальником не тільки новин, а й практичного контенту. Ми публікуємо аналітику, технічні розбори, кейси з індустрії.",
    },
    {
      title: "Студенти технічних спеціальностей",
      details:
        "Сайт буде корисним під час навчання. Тут можна знайти приклади, посилання на відкриті ресурси, туторіали, ідеї для курсових і дипломних проєктів, а також новини з ІТ-подій для студентів.",
    },
    {
      title: "Викладачі й ментори",
      details:
        "Матеріали порталу – джерело для формування сучасної навчальної програми, тем для обговорення, презентацій або статей. Тут легко знайти актуальні теми для дискусій і досліджень.",
    },
    {
      title: "Початківці у програмуванні",
      details:
        "Для тих, хто ще тільки починає з HTML, CSS, Python чи JavaScript, ми готуємо прості та зрозумілі матеріали без надмірної термінології. Пояснення, приклади, порівняння – усе для комфортного старту.",
    },
    {
      title: "Широка аудиторія користувачів",
      details:
        "Навіть якщо ви не маєте глибоких знань в ІТ – ми пояснюємо все просто. Для широкої аудиторії – легкі тексти про складне, що надихає та інформує.",
    },
  ];

  const togglePublishItem = (index) => {
    setExpandedPublishItem(expandedPublishItem === index ? null : index);
  };

  const toggleAudienceItem = (index) => {
    setExpandedAudienceItem(expandedAudienceItem === index ? null : index);
  };

  return (
    <div className="about-site-page">
      <Hero
        title={
          "Ми створили CubeIT, щоб зробити світ ІТ ближчим до кожного. Наш портал — це джерело свіжих, перевірених і цікавих новин зі світу технологій."
        }
      />

      <section className="about-site-section">
        <h2 className="section-title section-title-left">Що ми публікуємо</h2>
        <div className="section-content">
          <img
            src="https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748989574/33_wbcgdn.jpg"
            alt="Що ми публікуємо"
            className="section-image"
          />
          <div className="section-text">
            <div className="about-site-list">
              {publishItems.map((item, index) => (
                <div key={index} className="about-site-card">
                  <button
                    className="about-site-card-button"
                    onClick={() => togglePublishItem(index)}
                  >
                    {item.title}
                    <span className="toggle-icon">
                      {expandedPublishItem === index ? "-" : "+"}
                    </span>
                  </button>
                  {expandedPublishItem === index && (
                    <div className="about-site-card-details">
                      <p>{item.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-site-section">
        <h2 className="section-title section-title-right">
          Для кого створений сайт
        </h2>
        <div className="section-content">
          <div className="section-text">
            <div className="about-site-list">
              {audienceItems.map((item, index) => (
                <div key={index} className="about-site-card">
                  <button
                    className="about-site-card-button"
                    onClick={() => toggleAudienceItem(index)}
                  >
                    {item.title}
                    <span className="toggle-icon">
                      {expandedAudienceItem === index ? "-" : "+"}
                    </span>
                  </button>
                  {expandedAudienceItem === index && (
                    <div className="about-site-card-details">
                      <p>{item.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748989367/30_eg9ecj.jpg"
            alt="Для кого створений сайт"
            className="section-image"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
