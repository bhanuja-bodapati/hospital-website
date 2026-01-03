import TestimonialCard from "../../Components/cards/TestimonialCard";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-[#f4eef7] py-24 relative overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-blue-600 text-sm uppercase tracking-wide mb-2">
          Client
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
          Testimonials
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {testimonials.map((t) => (
          <TestimonialCard
            key={t.id}
            message={t.message}
            rating={t.rating}
            align={t.align as "left" | "right"}
          />
        ))}
      </div>

      {/* Doctor Footer */}
      <div className="max-w-4xl mx-auto mt-20 bg-blue-700 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 text-white">
        <img
          src="/home/doctor1.webp"
          alt="Doctor"
          className="w-24 h-24 rounded-full object-cover border-4 border-white"
        />

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">
            Dr. Devi Shetty
          </h3>
          <p className="text-sm opacity-90">
            MBBS, MD
          </p>
          <p className="text-sm opacity-80">
            Cardiologist
          </p>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
