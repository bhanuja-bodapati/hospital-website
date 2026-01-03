import SectionHeader from "../../Components/common/SectionHeader";
import ServiceCard from "../../Components/cards/ServiceCard";
import { services } from "../../data/services";

const Services = () => {
  return (
    <section className="pt-10 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive medical care across specialties"
        />

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {services.map(service => (
            <div key={service.id} className="flex">
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
