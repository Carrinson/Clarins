import { React, useState } from "react";
import { PiCaretCircleRightBold } from "react-icons/pi";
import { PiCaretCircleLeftBold } from "react-icons/pi";

const carousel = {
  position: "relative",
  width: "100%", // Make carousel responsive
  flexDirection:"column",

};

const imageStyle = {
  width: "100%", // Image takes full width of carousel
  height: "auto", // Height scales proportionally
  maxWidth: "50vh", // Limit image width on larger screens
  maxHeight: "50vh", // Limit image height on larger screens
  objectFit: "cover",
  borderRadius: "6px",
  marginBottom: "0.5rem",
  margin: '0 auto', // Center the image
  display: 'block'
};

const dotsContainerStyle = {
  display: "flex",
  flexDirection:"row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "0.5rem",
  bottom: "1rem",
  width: "100%", // Take full width
};

const dotStyle = (active) => ({
  flexDirection:"row",
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  border: "transparent",
  margin: "0 4px",
  backgroundColor: active ? "grey" : "#5CB338",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
});

const arrowContainer = {
  position: 'relative'
};

const arrowLeft = {
  position: "absolute",
  left: "0.5rem",
  top: "50%",
  transform: "translateY(-50%)", // Center vertically
  width: "40px",
  height: "40px",
  color: "white",
  backgroundColor: "#5CB338",
  borderRadius: "50%",
  zIndex: 1, // Ensure arrows are above the image
};

const arrowRight = {
  position: "absolute",
  right: "0.5rem",
  top: "50%",
  transform: "translateY(-50%)", // Center vertically
  width: "40px",
  height: "40px",
  color: "white",
  backgroundColor: "#5CB338",
  borderRadius: "50%",
  zIndex: 1, // Ensure arrows are above the image
};

function Carousel({ images = [] }) {
  const [currentImg, setCurrentImage] = useState(0);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1 + images.length) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  if (images.length === 0) return null;

  return (
    <div style={carousel}>
      {images.length > 1 && (
        <>
          <div style={arrowContainer}>
            <PiCaretCircleLeftBold onClick={prevImage} style={arrowLeft} />
            <img
              src={images[currentImg]}
              alt={`Image ${currentImg}`}
              style={imageStyle}
            />
            <PiCaretCircleRightBold onClick={nextImage} style={arrowRight} />
          </div>
          <div style={dotsContainerStyle}>
            {images.map((_, idx) => {
              return (
                <button
                  key={idx}
                  style={dotStyle(idx === currentImg)}
                  onClick={() => setCurrentImage(idx)}
                ></button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;