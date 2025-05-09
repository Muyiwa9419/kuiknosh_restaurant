import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/kchicken.png",
    title: "Grilled Chicken with Veggies",
    description: "Juicy grilled chicken served with fresh sautéed vegetables.",
  },
  {
    image: "/images/kspag.png",
    title: "Spaghetti Bolognese",
    description: "Classic Italian pasta with rich tomato and beef sauce.",
  },
  {
    image: "/images/kpie.png",
    title: "Meatpie Deluxe",
    description: "Tasty-crunchy Meatpie.",
  },
];

const CarouselSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const { image, title, description } = slides[current];

  return (
    <section id="gallery" className="bg-red-500 py-16 px-4 ">
      <div className="max-w-5xl mx-auto text-center transition-all rounded-4xl duration-500 hover:scale-105 cursor-pointer">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Our Delicious Dishes
        </h2>

        <div className="relative overflow-hidden rounded-lg shadow-lg max-w-4xl mx-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-80 object-cover transition duration-700"
          />

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Title + Description */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-white max-w-xl mx-auto">{description}</p>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${
                current === idx ? "bg-red-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(idx)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
