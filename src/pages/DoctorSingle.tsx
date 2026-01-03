import { useParams, Link } from "react-router-dom";
import { doctors } from "../data/doctors";

const DoctorSingle = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === Number(id));

  if (!doctor) {
    return <div className="py-24 text-center">Doctor not found</div>;
  }

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        
        {/* Image */}
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full rounded-2xl shadow"
        />

        {/* Content */}
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {doctor.name}
          </h1>

          <p className="text-blue-600 mb-4">
            {doctor.specialty}
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            {doctor.name} is a highly experienced specialist in the field of{" "}
            {doctor.department}. With years of clinical expertise, the doctor
            is dedicated to providing compassionate and effective patient care.
          </p>

          <ul className="space-y-2 text-gray-600 mb-8">
            <li><strong>Department:</strong> {doctor.department}</li>
            <li><strong>Experience:</strong> 10+ Years</li>
            <li><strong>Education:</strong> MBBS, MD</li>
            <li><strong>Languages:</strong> English, Hindi</li>
          </ul>

          {/* ✅ BOOK APPOINTMENT BUTTON */}
          <Link
            to={`/doctors/${doctor.id}/appointment`}
            className="inline-block bg-blue-700 hover:bg-blue-800 transition text-white px-6 py-3 rounded-md"
          >
            Book an Appointment
          </Link>
        </div>

      </div>
    </section>
  );
};

export default DoctorSingle;
