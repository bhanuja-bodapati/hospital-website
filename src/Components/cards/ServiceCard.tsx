import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ ensures it opens at the top
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden group flex flex-col h-full">

      {/* ===== TOP ROW (2 BOXES) ===== */}
      <div className="grid grid-cols-2 border-b border-gray-200">

        {/* LEFT BOX – TITLE (Now Clickable for ALL cards) */}
        <div className="px-6 py-6 border-r border-gray-200 flex items-center justify-center">
          <h3
            onClick={handleClick}
            className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition text-center"
          >
            {title}
          </h3>
        </div>

        {/* RIGHT BOX – FIXED UNIFORM IMAGE SIZE */}
        <div className="w-full h-[250px] flex-shrink-0 overflow-hidden">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300"
          />
        </div>
      </div>

      {/* ===== DESCRIPTION ===== */}
      <div className="p-6 flex-grow text-center">
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
};

export default ServiceCard;
