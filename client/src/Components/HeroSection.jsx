import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Each slide has an image + headline + optional button text
const slides = [
  {
    image: "/heroimg/slider1.jpg",
    title: "PARKVIEW CITY GOLF ESTATE",
    button: "VIEW PROJECT",
  },
  {
    image: "/heroimg/slider2.jpg",
    title: "LUXURY LIVING SURROUNDED BY GREEN",
    button: "VIEW PROJECT",
  },
  {
    image: "/heroimg/slider3.jpg",
    title: "EXPERIENCE MODERN ARCHITECTURE",
    button: "VIEW PROJECT",
  },
  {
    image: "/heroimg/slider4.jpg",
    title: "THE PERFECT BLEND OF NATURE & DESIGN",
    button: "VIEW PROJECT",
  },
  {
    image: "/heroimg/slider5.png",
    title: "THe Valley OF death ",
    button: "VIEW PROJECT",
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides + Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
          />
          {/* Unique Overlay for Each Slide */}
          <div className="absolute bottom-0 w-full bg-black/25 backdrop-filter backdrop-blur-md text-white p-8">
            <h1 className="text-3xl font-bold">{slide.title}</h1>
            <button
              className="
    mt-4 px-6 py-2
    border border-white
    text-white font-medium
    bg-white/10 backdrop-blur-sm rounded
    transition-shadow duration-300 ease-out
    hover:bg-white/20
    hover:shadow-[0_0_8px_rgba(255,255,255,0.7)]
  "
            >
              {slide.button}
            </button>

          </div>
        </div>
      ))}

      {/* Navigation */}
      <div className="absolute bottom-0 right-0 flex gap-6 text-white p-8 z-20">
        <button onClick={goPrev}>PREV</button>
        <button onClick={goNext}>NEXT</button>
      </div>

      {/* Progress Bar */}
      <motion.div
        key={current}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear" }}
        className="absolute bottom-0 left-0 h-1 bg-white z-20"
      />
    </div>
  );
};

export default ImageSlider;
