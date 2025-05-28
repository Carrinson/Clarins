import React, { useState } from "react";
// import "./ProductCard.css";
import Products from "../../components/Face.json";
import CardPopup from "../../components/CardPopup";

function LipNeckCareCard() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="gen-container">
      <div className="prodname">
        <h3> Lip and Neck Care </h3>
      </div>
      <div className="card-container">
        {Products["lip and neck care"] &&
          Products["lip and neck care"].map((data) => {
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

export default LipNeckCareCard;
