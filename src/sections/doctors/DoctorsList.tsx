import { useState } from "react";
import DoctorCard from "../../Components/cards/DoctorCard";
import { doctors } from "../../data/doctors";

const departments = [
  "All Department",
  "Cardiology",
  "Dental",
  "Heart surgeon",
  "Cancer Doctor",
  "Neurology",
  "Pediatric",
  "Traumatology",
];

const DoctorsList = () => {
  const [active, setActive] = useState("All Department");
  const [showAll, setShowAll] = useState(false);

  const filteredDoctors =
    active === "All Department"
      ? doctors
      : doctors.filter((doc) => doc.department === active);

  // Limit to 2 rows (4 cards per row → 8 cards total)
  const visibleDoctors = showAll ? filteredDoctors : filteredDoctors.slice(0, 8);

  return (
    <section className="py-24 bg-white w-full">
      <div className="max-w-[90%] mx-auto px-4">

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
              onClick={() => {
                setActive(dept);
                setShowAll(false); // reset to 2 rows when switching tab
              }}
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

        {/* Doctors Grid (2 rows / 4 per row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {visibleDoctors.map((doc) => (
            <DoctorCard
              key={doc.id}
              id={doc.id}
              image={doc.image}
              name={doc.name}
              specialty={doc.specialty}
            />
          ))}
        </div>

        {/* View More / View Less Buttons */}
        {filteredDoctors.length > 8 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-6 py-2 rounded-md font-semibold transition ${
                showAll ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default DoctorsList;
