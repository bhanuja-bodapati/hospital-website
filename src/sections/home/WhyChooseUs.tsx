

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#f0f7fb] py-12 relative overflow-hidden">
      
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 opacity-30 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0a2540] mb-2">
            Why Choose Us
          </h2>

          {/* Rare animated underline effect */}
          <div className="h-[3px] w-28 sm:w-40 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-3">
            Your health is our priority, delivered with trust, innovation, and compassionate care.
          </p>
        </div>

        {/* CARDS (Glass floating unique UI) */}
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">

          {/* Card 1 */}
          <div className="group bg-white/60 backdrop-blur-xl border border-white/20 rounded-[24px] p-6 shadow-md transition-all text-center w-full max-w-[260px] hover:scale-[1.08] hover:-translate-y-3 hover:shadow-xl hover:ring-4 ring-purple-400/30">
            <div className="text-4xl mb-3 transition group-hover:rotate-12"></div>
            <h3 className="font-bold text-lg text-[#0a2540] mb-1">Expert Medical Care</h3>
            <p className="text-gray-700 text-sm">Access to 150+ experienced specialists delivering world-class treatment.</p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/60 backdrop-blur-xl border border-white/20 rounded-[24px] p-6 shadow-md transition-all text-center w-full max-w-[260px] hover:scale-[1.08] hover:-translate-y-3 hover:shadow-xl hover:ring-4 ring-green-400/30">
            <div className="text-4xl mb-3 transition group-hover:rotate-12"></div>
            <h3 className="font-bold text-lg text-[#0a2540] mb-1">Cutting-Edge Tech</h3>
            <p className="text-gray-700 text-sm">Advanced diagnostic and treatment systems for precise and effective care.</p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/60 backdrop-blur-xl border border-white/20 rounded-[24px] p-6 shadow-md transition-all text-center w-full max-w-[260px] hover:scale-[1.08] hover:-translate-y-3 hover:shadow-xl hover:ring-4 ring-yellow-400/30">
            <div className="text-4xl mb-3"></div>
            <h3 className="font-bold text-lg text-[#0a2540] mb-1">Patient-Centered Care</h3>
            <p className="text-gray-700 text-sm">Personalized treatment plans focused on comfort, recovery, and lifestyle.</p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white/60 backdrop-blur-xl border border-white/20 rounded-[24px] p-6 shadow-md transition-all text-center w-full max-w-[260px] hover:scale-[1.08] hover:-translate-y-3 hover:shadow-xl hover:ring-4 ring-blue-400/30">
            <div className="text-4xl mb-3"></div>
            <h3 className="font-bold text-lg text-[#0a2540] mb-1">Accredited Excellence</h3>
            <p className="text-gray-700 text-sm">ISO-certified systems ensuring the highest standards of safety & quality.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
