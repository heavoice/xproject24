import React, { useState, useEffect } from "react";
import tech1 from "../../assets/img/tech1.png";
import tech2 from "../../assets/img/tech2.png";
import tech3 from "../../assets/img/tech3.png";
import teaser from "../../assets/video/teaser.mp4";
import ukwu from "../../assets/img/ukwu.png";
import en from "../../assets/img/en.png";
import carousel1 from "../../assets/img/ImageCarousel/1-xpro.jpg";
import carousel2 from "../../assets/img/ImageCarousel/2-xpro.jpg";
import carousel3 from "../../assets/img/ImageCarousel/4-xpro.jpg";
import carousel4 from "../../assets/img/ImageCarousel/5-xpro.JPG";
import carousel5 from "../../assets/img/ImageCarousel/6-xpro.JPG";

const images = [carousel1, carousel2, carousel3, carousel4, carousel5];
const AboutBottomSect = () => {
  const [currentIndex, setCurrentIndex] = useState(3);
  const interval = 3000;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(autoPlay);
  }, [currentIndex]);

  return (
    <div className="bg-image2 w-full h-[685vh] max-[440px]:h-[110rem] max-[400px]:h-[290rem] max-[360px]:h-[290rem] md:h-[110rem] xl:h-[110rem] absolute text-[#D7996C] top-[150rem] sm:top-[110rem] md:top-[215rem]  ">
    {/* Our Event */}
    <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <p
        className="text-xs sm:text-xl md:text-2xl lg:text-2xl flex text-white bg-[#D7996C] rounded-xl px-6 sm:px-12 py-3 z-10 my-20"
        style={{ fontFamily: "Lost Island" }}
      >
        Gallery
      </p>
         
      {/* Carousel */}
      <div className="w-full max-w-[20em] md:max-w-[40rem] mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 relative">
        <div className="relative w-full max-w-4xl  mt-24  ">
          <div className="relative flex items-center justify-center  h-full">
            {images.map((image, index) => {
              const position = index - currentIndex;

              if (position < -2 || position > 2) return null; 

              const zIndex =
                position === 0 ? 10 : position === -1 || position === 1 ? 5 : 0;

              const scaleX = 1;
              const scaleY =
                position === 0
                  ? 1
                  : position === -1 || position === 1
                  ? 0.9
                  : 0.8;

              const opacity = position === 0 ? "opacity-100" : "opacity-75";

              const transitionDelay = `${Math.abs(position) * 0.05}s`;
              const transition = `transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease-in-out ${transitionDelay}`;

              return (
                <img
                  key={index}
                  src={image}
                  alt={`Carousel ${index}`}
                  className={`absolute rounded-lg ${opacity}`}
                  style={{
                    zIndex: zIndex,
                    left: `calc(50% + ${position * 10}%)`,
                    transform: `translateX(-50%) scale(${scaleX}, ${scaleY})`,
                    transition: transition, 
                  }}
                />
              );
            })}
          </div>
          <div className="relative inset-0 mt-56 flex items-center justify-between px-4">
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button
                className="bg-white text-black text-2xl p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
                onClick={handlePrev}
              >
                ←
              </button>
              <div className="absolute  left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? "bg-orange-950" : "bg-gray-400"
                    } transition-colors`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
              <button
                className="bg-white text-black text-2xl p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
                onClick={handleNext}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/*teaser*/}
      <div className="w-full lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col items-center translate-y-48 px-4 sm:px-6 lg:px-8">
        <p
          className="text-xl md:text-2xl lg:text-2xl flex text-white bg-[#D7996C] rounded-xl px-8 sm:px-12 lg:px-16 py-3 z-10"
          style={{ fontFamily: "Lost Island" }}
        >
          Teaser
        </p>
        <div className="relative w-full pt-[56.25%] translate-y-16">
          <video
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            controls
            autoPlay
            loop
            muted
          >
            <source src={teaser} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutBottomSect;
