import { useState } from "react";
import DoctorCard from "../../Components/cards/DoctorCard";
import { doctors } from "../../data/doctors";

const departments = [
  "All Department",
  "Cardiology",
  "Dental",
  "Heart surgeon",
  "cancer doctor",
  "Neurology",
  "Pediatric",
  "Traumatology",
];

const DoctorsList = () => {
  const [active, setActive] = useState("All Department");

  const filteredDoctors =
    active === "All Department"
      ? doctors
      : doctors.filter((doc) => doc.department === active);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Doctors
          </h2>

          <div className="w-10 h-1 bg-red-500 mx-auto my-4"></div>

          <p className="text-gray-500 max-w-xl mx-auto">
            We provide a wide range of healthcare services with expert specialists.
          </p>
        </div>

        {/* Department Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActive(dept)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition
                ${
                  active === dept
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-red-100"
                }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Doctors Grid - 3×3 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">

          {filteredDoctors.map((doc) => (
            <DoctorCard
              key={doc.id}
              id={doc.id}
              image={doc.image}
              name={doc.name}
              specialty={doc.specialty}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DoctorsList;
