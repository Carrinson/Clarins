// import Picture from './imgs/moisturizer_1.png';
import { useState } from 'react';
import Products from '../../../data/clarins.json' 
import CardPopup from '../../components/CardPopup';


function Moisturizer(){
  const [selectedCard, setSelectedCard] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const initialItems = Products.moisturizer ? Products.moisturizer.slice(0, 8) : [];
  const [displayedItems, setDisplayedItems] = useState(initialItems);

  const handleShowMore = () => {
    setShowMore(true);
    setDisplayedItems(Products.moisturizer);
  };

  const handleShowLess = () => {
    setShowMore(false);
    setDisplayedItems(initialItems);
  };

  return (
    <div className="gen-container">
            <div className="prodname">
        <h3>Moisturizers</h3>
      </div>
      <div className="card-container">
        {displayedItems &&
          displayedItems.map((data) => {
            return (
              <div className="card"
                key={data.id}
                onClick={() => setSelectedCard(data)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1.0)")
                }
              >
                <img className="card-img" src={data.image_path} alt="" />
                <p className="card-title">{data.productname}</p>
                <p className="card-price">{data.price}</p>
              </div>
            )
          }
          )
        }
      </div> 
      {!showMore && Products.moisturizer && Products.moisturizer.length > 8 && (
        <button className="showMore-less" onClick={handleShowMore}>Show More</button>
      )}
      {showMore && (
        <button className="showMore-less" onClick={handleShowLess}>Show Less</button>
      )}
      <CardPopup card={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  );
}
export default Moisturizer