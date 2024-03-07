import { useState, useEffect, useCallback } from "react";
import ArrowL from "../images/left_arrow.png";
import ArrowR from "../images/right_arrow.png";

const Carrousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, goToPrevious, goToNext]);

  return (
    <div className="sliderStyles">
      <div>
        {slides.length > 1 && (
          <div onClick={goToPrevious} className="leftArrowStyles">
            <img src={ArrowL} alt="fleche_gauche" />
          </div>
        )}
        {slides.length > 1 && (
          <div onClick={goToNext} className="rightArrowStyles">
            <img src={ArrowR} alt="fleche_droite" />
          </div>
        )}
      </div>

      {slides.map((picture, i) => (
        <div key={i} className="containerStyles">
          {i === currentIndex && (
            <img
              className="slideStyles"
              alt="banniere-page-logement"
              src={picture}
            />
          )}
          {i === currentIndex && slides.length > 1 && (
            <span className="sliderNumber">
              {currentIndex + 1}/{slides.length}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
