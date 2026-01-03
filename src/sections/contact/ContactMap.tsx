// src/sections/contact/ContactMap.tsx
const ContactMap = () => {
  return (
    <section className="w-full h-[400px]">
      <iframe
        title="MediCare Location"
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps?q=Hyderabad&output=embed"
      ></iframe>
    </section>
  );
};

export default ContactMap;
