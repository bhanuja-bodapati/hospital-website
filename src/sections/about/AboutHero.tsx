const AboutHero = () => {
  return (
    <section
      className="relative h-[360px] md:h-[420px] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/about/background1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay
      <div className="absolute inset-0 bg-blue-900/80"></div> */}



      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
        <p className="text-sm uppercase tracking-widest mb-2 opacity-90">
          About Us
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">
          About MediCare Hospital
        </h1>
        <p className="mt-4 text-lg text-blue-100">
          Trusted healthcare built on compassion, excellence, and innovation.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
