import { Link } from "react-router-dom";

interface DoctorCardProps {
  id: number;
  image: string;
  name: string;
  specialty: string;
  phone?: string;
}

const DoctorCard = ({ image, name, specialty, phone = "+91 63012 44567" }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col overflow-hidden border border-gray-300 w-full h-[420px] max-w-[340px]">

      {/* Image Box */}
      <div className="h-[240px] w-full bg-gray-50 border-b border-gray-300 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"  // 👈 fits without stretch or crop
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-center items-center">
        <h3 className="text-lg font-bold text-gray-900 text-center">{name}</h3>
        <p className="text-sm text-pink-600 font-medium mt-1 text-center">{specialty}</p>

        {/* Phone */}
        <a href={`tel:${phone}`} className="text-blue-600 font-semibold text-sm mt-3 hover:underline">
          {phone}
        </a>
      </div>

      {/* Button */}
      <Link
        to="/contact"
        className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 font-semibold text-sm text-center w-full border-t border-gray-300"
      >
        Book an Appointment
      </Link>
    </div>
  );
};

export default DoctorCard;
