import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  icon: string; // image URL
}

const ServiceCard = ({ title, description, icon }: Props) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden group">

      {/* ===== TOP ROW (2 BOXES) ===== */}
      <div className="grid grid-cols-2 border-b border-gray-200">

        {/* LEFT BOX – TITLE */}
        <div className="px-6 py-6 border-r border-gray-200 flex items-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            {title}
          </h3>
        </div>

        {/* RIGHT BOX – BIG IMAGE FIT */}
        <div className="w-full h-full">
          <img
            src={icon}
            alt={title}
            className="
              w-full
              h-[200px] sm:h-[200px] md:h-[300px] lg:h-[300px] xl:h-[200px]
              object-cover
              group-hover:scale-[1.02] transition duration-300
            "
          />+
        </div>
      </div>

      {/* ===== DESCRIPTION ===== */}
      <div className="p-6">
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
          {description}
        </p>

        {/* BOOK APPOINTMENT BUTTON */}
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
        >
          Book an Appointment
        </Link>
      </div>

    </div>
  );
};

export default ServiceCard;
