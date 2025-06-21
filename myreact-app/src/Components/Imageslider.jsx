import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaArrowDown } from "react-icons/fa";
import img1 from "../assets/1-2.jpg";
import img2 from "../assets/1-3.jpg";
import img3 from "../assets/1-4.jpg";
import img4 from "../assets/1-12.jpg";
import img5 from "../assets/1-5.jpg";
import img6 from "../assets/1-6.jpg";
import img7 from "../assets/1-7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const getVisibleImages = () => {
    return [
      images[current % length],
      images[(current + 1) % length],
      images[(current + 2) % length],
    ];
  };

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent(prev => (prev + 1) % length);
  }, 2500);

  return () => clearInterval(interval);
}, [length]);


  return (
    <div className="relative w-full max-w-6xl mx-auto mt-[8rem] px-4 overflow-hidden rounded-xl shadow-lg">
      <div className="flex transition-transform duration-700 ease-in-out">
        {getVisibleImages().map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="w-1/3 md:w-1/3 sm:w-full h-[20rem] md:h-[300px] object-cover px-1"
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
      >
        <FaArrowRight />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white">
        <FaArrowDown />
      </div>
    </div>
  );
}
