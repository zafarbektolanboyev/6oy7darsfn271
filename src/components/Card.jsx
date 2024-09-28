import React, { useEffect, useState } from "react";
import "./Card.css";

function Card() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); // Yuklanish holati uchun state

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setCards(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); 
      });
  }, []);

  return (
    <div className="cards">
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          cards.length > 0 &&
          cards.map(function (value, index) {
            return (
              <div className="card" key={index}>
                <img
                  src={value.attributes.image}
                  alt=""
                />
                <h2>Name: {value.attributes.title}</h2>
                <h3>Price: {value.attributes.price}</h3>
              </div>
            );
          })
        )
      }
    </div>
  );
}

export default Card;
