import { useEffect, useRef } from "react";
import DoctorCard from "../../Components/cards/DoctorCard";
import { doctors } from "../../data/doctors";

const DoctorsPreview = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Force start from beginning
    container.scrollLeft = 0;

    let scrollAmount = 0;
    let animationFrame: number;

    const scroll = () => {
      scrollAmount += 0.4;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    const stopScroll = () => cancelAnimationFrame(animationFrame);
    const startScroll = () => (animationFrame = requestAnimationFrame(scroll));

    container.addEventListener("mouseenter", stopScroll);
    container.addEventListener("mouseleave", startScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", stopScroll);
      container.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-1">
            Our Doctors
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Meet Our Qualified Specialists
          </h2>

          <p className="text-gray-500 text-sm sm:text-base">
            A dedicated team committed to excellence in patient care.
          </p>
        </div>

        {/* Auto Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide items-stretch"
        >
          {[...doctors, ...doctors].map((doc, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] flex"
            >
              <DoctorCard
                id={doc.id}
                image={doc.image}
                name={doc.name}
                specialty={doc.specialty}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DoctorsPreview;
