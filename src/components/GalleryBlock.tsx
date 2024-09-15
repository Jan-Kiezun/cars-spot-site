import React, { useState } from "react";
import red_car from "../assets/red-car.svg";
import black_car from "../assets/black-car.svg";
import closeup_car from "../assets/closeup-car.svg";

const GalleryBlock = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [red_car, black_car, closeup_car];

  const goToSlide = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="indicators-carousel"
      className="relative w-[85%] mx-auto my-10 mb-48"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item={index === activeIndex ? "active" : ""}
          >
            <img
              src={slide}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-[-5rem] left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-[#0136DF]" : "bg-gray-300"
            }`}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
    </div>
  );
};

export default GalleryBlock;
