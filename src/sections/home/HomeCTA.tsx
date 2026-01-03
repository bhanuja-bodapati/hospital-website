import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-center overflow-hidden">

      {/* Decorative circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-20 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute -top-10 -right-20 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Your Health, Our Priority
        </h2>

        <p className="text-blue-100 text-base md:text-lg mb-8">
          Connect with our specialists anytime. Fast, trusted & patient-focused care when you need it most.
        </p>

        <Link
          to="/contact"
          className="
            inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg
            shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300
            "
        >
          MAKE APPOINTMENT
          <span className="text-2xl">→</span>
        </Link>

        {/* Sub info */}
        <p className="mt-6 text-blue-200 text-sm md:text-base">
          24/7 Support • Certified Doctors • Seamless Booking
        </p>

      </div>
    </section>
  );
};

export default HomeCTA;
