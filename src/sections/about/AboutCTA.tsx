import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="relative bg-blue-600 text-white text-center py-16 overflow-hidden">

      {/* Decorative blurred circles */}
      <div className="absolute top-[-80px] left-[-80px] w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-90px] w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="animate-float-in relative z-10 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
          Your Health Is Our Priority
        </h2>

        <p className="text-lg md:text-xl text-blue-100 font-medium max-w-2xl mx-auto leading-relaxed">
          Get in touch with our medical experts today for trusted, personalized care.
        </p>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-white text-blue-600 px-9 py-4 rounded-2xl font-bold text-base
          shadow-lg shadow-white/20 transition-all duration-300
          hover:scale-[1.07] hover:shadow-white/40 hover:shadow-xl hover:brightness-110"
        >
          Contact Us
        </Link>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes floatIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-in {
          animation: floatIn 0.8s ease-out forwards, float 3s ease-in-out infinite 1s;
        }
      `}</style>

    </section>
  );
};

export default AboutCTA;
