
import SectionHeader from "../../Components/common/SectionHeader";
import ServiceCard from "../../Components/cards/ServiceCard";
import { services } from "../../data/services";

const Services = () => {
  return (
    <section className="w-full bg-white mt-4 md:mt-6 lg:mt-8 pb-6 sm:pb-8 md:pb-12 lg:pb-16 px-3 sm:px-5 md:px-8 lg:px-12">
      <div className="w-full max-w-none mx-auto">

        {/* Header */}
        <div className="w-full text-center mb-5 sm:mb-6 md:mb-8">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive medical care across specialties"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-5 w-full 
                        grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3
                        place-items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full flex justify-center transition-all duration-300 ease-out
                         hover:scale-[1.06] sm:hover:scale-[1.08] md:hover:scale-[1.05] lg:hover:scale-[1.08]
                         rounded-2xl"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
