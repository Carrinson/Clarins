import React, { useState } from "react";
import Products from "../components/UV.json";
import CardPopup from "../components/CardPopup";

function Sunscreen() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const initialItems = Products.sunscreen ? Products.sunscreen.slice(0, 8) : [];
  const [displayedItems, setDisplayedItems] = useState(initialItems);

  const handleShowMore = () => {
    setShowMore(true);
    setDisplayedItems(Products.sunscreen);
  };

  const handleShowLess = () => {
    setShowMore(false);
    setDisplayedItems(initialItems);
  };

  return (
    <div className="gen-container">
      <div className="prodname">
        <h3>Sunscreen</h3>
      </div>
      <div className="card-container">
        {displayedItems &&
          displayedItems
          .slice(3, 20)
          .map((data) => {
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
                <img className="card-img" src={data.image_path} alt="dont work" />
                <div className="card-content">
                  <h3>{data["product name"]}</h3>
                  <br />
                  <p>
                    <b>{data.price}</b>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      {!showMore && Products.sunscreen && Products.sunscreen.length > 8 && (
        <button className="showMore-less" onClick={handleShowMore}>Show More</button>
      )}
      {showMore && (
        <button className="showMore-less" onClick={handleShowLess}>Show Less</button>
      )}
      <CardPopup card={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  );
}

export default Sunscreen;