import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2 className="contact-heading">
            Хочете співпрацювати або задати питання? Зв’яжіться з нами!
          </h2>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.1533396779582!2d34.56585288457706!3d49.57599642092928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82f64cd0cbd85%3A0x528a08266c1d4938!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgwqvQn9C-0LvRgtCw0LLRgdGM0LrQsCDQv9C-0LvRltGC0LXRhdC90ZbQutCwINGW0LzQtdC90ZYg0K7RgNGW0Y8g0JrQvtC90LTRgNCw0YLRjtC60LDCuw!5e0!3m2!1sru!2sua!4v1748800869701!5m2!1sru!2sua"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Ім’я" required />
          <input type="text" placeholder="Компанія" />
          <input type="email" placeholder="Електронна пошта" required />
          <textarea placeholder="Напишіть нотатку..." rows="5" required></textarea>
          <button type="submit">Надіслати</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
