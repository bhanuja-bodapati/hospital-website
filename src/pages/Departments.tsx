import DepartmentCard from "../Components/cards/DepartmentCard";
import { departments } from "../data/departments";

const Departments = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative h-[260px] md:h-[320px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/about/background1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-blue-900/80"></div> */}
        <div className="relative z-10 text-white">
          <p className="uppercase text-sm tracking-widest mb-2">
            Care Department
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Award Winning Patient Care
          </h1>
        </div>
      </section>

      {/* ===== DEPARTMENTS SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Award Winning Patient Care
            </h2>

            <div className="w-10 h-1 bg-red-500 mx-auto mb-6"></div>

            <p className="text-gray-600 text-sm md:text-base">
              MediCare Hospitals deliver exceptional healthcare services through
              advanced technology, expert doctors, and compassionate patient care.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <DepartmentCard key={dept.id} department={dept} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Departments;
