const DoctorsHero = () => {
  return (
    <section
      className="relative w-full h-[260px] sm:h-[300px] md:h-[360px] lg:h-[420px] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/about/background1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/75 to-blue-900/90"></div> */}

      {/* Content */}
      <div className="relative z-10 px-4">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-100 mb-2">
          All Doctors
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Specialized Doctors
        </h1>
      </div>
    </section>
  );
};

export default DoctorsHero;
