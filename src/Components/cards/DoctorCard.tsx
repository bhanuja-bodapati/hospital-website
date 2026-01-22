import { useNavigate } from "react-router-dom";

interface DoctorCardProps {
  id: number;
  image: string;
  name: string;
  specialty: string;
  phone?: string;
}

const DoctorCard = ({
  id,
  image,
  name,
  specialty,
  phone = "9676034783",
}: DoctorCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/doctors/${id}/appointment`); 
  
    window.scrollTo(0, 0); 
  };

  return (
    <div className="bg-white rounded-2xl shadow-md transition flex flex-col overflow-hidden border border-gray-300 w-full max-w-[800px] h-[220px] group hover:scale-[1.04]">

      <div className="grid grid-cols-2 flex-1">

        <div className="p-5 border-r border-gray-200 flex flex-col items-center justify-center bg-gray-50">
          <h3
            onClick={handleNavigate}
            className="text-xl font-bold text-gray-900 text-center hover:text-blue-600 transition cursor-pointer"
          >
            {name}
          </h3>

          <p className="text-sm text-gray-600 font-medium text-center mt-1">
            {specialty}
          </p>

          <a
            href={`tel:${phone}`}
            className="text-blue-600 font-bold text-sm mt-2 hover:underline text-center"
          >
            {phone}
          </a>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="bg-gray-100 w-full h-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
