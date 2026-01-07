import { Link } from "react-router-dom";

const services = [
  {
    title: "Virtual Consultation",
    description:
      "Virtual consultation services are increasingly popular in the health industry, especially with recent technologies.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  },
  {
    title: "Make Appointment",
    description:
      "Whether you're seeking medical advice, follow-up care, or simple health questions, book your needs easily.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Online Pharmacy",
    description:
      "Our comprehensive selection of medicines and healthcare products is just a click away.",
    image:
      "/about/cart.jpg",
  },
];

const AboutServicesSection = () => {
  return (
    <section className="bg-[#f8f3ea] py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== TOP CONTENT ===== */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            We Offer a Wide Range of <br /> Unique Services
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-lg">
            Journey to better health and wellbeing. Treatment for specific
            conditions, simple looking to improve, and reflects the tone you
            want to convey to your users.
          </p>
        </div>

        {/* ===== SERVICES CARDS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition"
              >
                →
              </Link>
            </div>
          ))}

        </div>

        {/* ===== CTA BUTTON ===== */}
        <div className="text-center mt-12">
          {/* <Link
            to="/services"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold px-8 py-3 rounded-full"
          >
            See More
          </Link> */}
        </div>

      </div>
    </section>
  );
};

export default AboutServicesSection;
