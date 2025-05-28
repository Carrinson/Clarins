import React, { useState } from "react";
// import "./ProductCard.css";
import Products from "../../components/Face.json";
import CardPopup from "../../components/CardPopup";

function FaceOilCard() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="gen-container">
      <div className="prodname">
        <h3>Face Treatment Oils </h3>
      </div>
      <div className="card-container">
        {Products["face treatment oils"] &&
          Products["face treatment oils"].map((data) => {
            return (
              <div
                className="card"
                key={data.id}
                onClick={() => setSelectedCard(data)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1.0)")
                }
              >
                <img className="card-img" src={data.image_path} alt=" dont work" />
                <div className="card-content">
                  <h3> {data["product name"]} </h3>
                  <br />
                  <p>
                    <b> {data.price} </b>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <CardPopup card={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  );
}

export default FaceOilCard;
