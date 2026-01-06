import  { useState, useEffect } from "react";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section className="bg-gradient-to-b from-purple-50 to-purple-100 px-2 sm:px-4 md:px-6 pb-8">
      {/* Heading */}
      <div className="text-center mb-5">
        <p className="text-purple-600 text-xs sm:text-sm uppercase tracking-wide">
          Patient Feedback
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800">
          Testimonials
        </h2>
      </div>

      {/* Slider Card (1 review at a time) */}
      <div className="w-full flex justify-center">
        <div className="bg-white w-[96%] sm:w-[82%] md:w-[68%] lg:w-[50%] rounded-2xl shadow-md p-4 sm:p-6">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 italic">
            “{t.message}”
          </p>

          {/* Rating */}
          <div className="flex justify-center my-2 text-base sm:text-lg">
            {"⭐".repeat(t.rating)}
          </div>

          {/* Reviewer */}
          <div className="text-center">
            <h4 className="text-purple-700 font-semibold text-sm sm:text-base">
              {t.name}
            </h4>
            <span className="text-xs sm:text-sm text-gray-500">
              {t.role}
            </span>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
              i === index ? "bg-purple-700 scale-110" : "bg-purple-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
