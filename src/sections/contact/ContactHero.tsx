// src/sections/contact/ContactHero.tsx
const ContactHero = () => {
  return (
    <section
      className="relative h-[260px] md:h-[340px] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/about/background1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="absolute inset-0 bg-blue-900/80"></div> */}

      <div className="relative z-10 text-white px-4">
        <p className="uppercase tracking-widest text-sm mb-2">
          Get in Touch
        </p>
        <h1 className="text-3xl md:text-5xl font-bold">
          Contact MediCare Hospital
        </h1>
      </div>
    </section>
  );
};

export default ContactHero;
