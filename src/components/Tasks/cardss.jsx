import React, { useEffect, useState } from "react";
import "./Card.css";

function Card() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setCard(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="sec">
      {card.map((item) => (
        <div className="card" key={item.id}>

          <div className="badge">HOT SALE</div>

          <div className="tilt">
            <div className="img">
              <img src={item.image} alt={item.title} />
            </div>
          </div>

          <div className="info">
            <div className="cat">{item.category}</div>
            <h2 className="title">{item.title}</h2>
            <p className="desc">{item.description}</p>

            <div className="bottom">
              <div className="price">
                <span className="old">₹{item.price + 150}</span>
                <span className="new">₹{item.price}</span>
              </div>

              <button className="btn">
                <span>Add to Cart</span>
              </button>
            </div>

            <div className="meta">
              <div className="rating">
                ⭐⭐⭐⭐⭐
                <span className="rcount">245 Reviews</span>
              </div>
              <div className="stock">In Stock</div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Card;
