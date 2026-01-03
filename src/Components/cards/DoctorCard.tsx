import { Link } from "react-router-dom";

interface DoctorCardProps {
  id: number;
  image: string;
  name: string;
  specialty: string;
}

const DoctorCard = ({ id, image, name, specialty }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col text-center overflow-hidden border border-gray-300 h-[420px] w-[340px]">

      {/* IMAGE SHOULD FIT CARD & MATCH SIZE */}
      <div className="h-[240px] w-full flex items-center justify-center bg-gray-50 border-b border-gray-300">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-fill"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-pink-600 font-medium mt-1">{specialty}</p>
      </div>

      {/* BUTTON */}
      <Link
        to={`/doctors/${id}/appointment`}
        className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 font-semibold text-sm border-t border-gray-300"
      >
        Book an Appointment
      </Link>
    </div>
  );
};

export default DoctorCard;
