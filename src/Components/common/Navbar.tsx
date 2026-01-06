import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(""); // underline removed by default
  const [doctorOpen, setDoctorOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  const navLink =
    "relative py-2 cursor-pointer after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          MediCare
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-gray-800 font-semibold items-center">
          <Link
            to="/"
            onClick={() => setActive("Home")}
            className={navLink + (active === "Home" ? " after:w-full text-blue-600" : "")}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setActive("About")}
            className={navLink + (active === "About" ? " after:w-full text-blue-600" : "")}
          >
            About Us
          </Link>

          {/* DEPARTMENTS DROPDOWN */}
          <div className="relative group">
            <span className={navLink + " flex items-center gap-1"}>
              Departments <span className="text-xs">▼</span>
            </span>

            <div className="absolute left-0 top-full w-60 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link
                to="/departments"
                className="block px-5 py-3 text-sm hover:text-blue-600 border-b border-gray-200"
                onClick={() => setDeptOpen(false)}
              >
                All Departments
              </Link>

              <Link
                to="/departments/ophthalmology"
                className="block px-5 py-3 text-sm hover:text-blue-600"
                onClick={() => setDeptOpen(false)}
              >
                Ophthalmology
              </Link>

              <Link
                to="/departments/cardiology"
                className="block px-5 py-3 text-sm hover:text-blue-600 border-t border-gray-200"
                onClick={() => setDeptOpen(false)}
              >
                Cardiology
              </Link>

              <Link
                to="/departments/pulmonology"
                className="block px-5 py-3 text-sm hover:text-blue-600 border-t border-gray-200"
                onClick={() => setDeptOpen(false)}
              >
                Pulmonology
              </Link>

              <Link
                to="/departments/dental-care"
                className="block px-5 py-3 text-sm hover:text-blue-600 border-t border-gray-200"
                onClick={() => setDeptOpen(false)}
              >
                Dental Care
              </Link>
            </div>
          </div>

          {/* DOCTORS DROPDOWN */}
          <div className="relative group">
            <span className={navLink + " flex items-center gap-1"}>
              Doctors <span className="text-xs">▼</span>
            </span>

            <div className="absolute left-0 top-full w-60 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link
                to="/doctors"
                className="block px-5 py-3 text-sm hover:text-blue-600 border-b border-gray-200"
                onClick={() => setDoctorOpen(false)}
              >
                All Doctors
              </Link>

              <Link
                to="/doctors/1"
                className="block px-5 py-3 text-sm hover:text-blue-600 border-b border-gray-200"
                onClick={() => setDoctorOpen(false)}
              >
                Doctor Profile
              </Link>

              <Link
                to="/doctors/1/appointment"
                className="block px-5 py-3 text-sm hover:text-blue-600"
                onClick={() => setDoctorOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            onClick={() => setActive("Contact")}
            className={navLink + (active === "Contact" ? " after:w-full text-blue-600" : "")}
          >
            Contact Us
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-900 font-semibold">

            <Link
              to="/"
              className="py-2 text-lg hover:text-blue-600 transition"
              onClick={() => {
                setActive("Home");
                setIsOpen(false);
              }}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="py-2 text-lg hover:text-blue-600 transition"
              onClick={() => {
                setActive("About");
                setIsOpen(false);
              }}
            >
              About Us
            </Link>

            {/* MOBILE DEPARTMENTS */}
            <button
              onClick={() => setDeptOpen(!deptOpen)}
              className="flex justify-between items-center text-lg py-2 hover:text-blue-600 transition"
            >
              Departments <span>{deptOpen ? "−" : "+"}</span>
            </button>

            {deptOpen && (
              <div className="ml-3 flex flex-col gap-3 text-base border-l pl-4 border-gray-300">
                <Link to="/departments" onClick={() => setIsOpen(false)}>All Departments</Link>
                <Link to="/departments/ophthalmology" onClick={() => setIsOpen(false)}>Ophthalmology</Link>
                <Link to="/departments/cardiology" onClick={() => setIsOpen(false)}>Cardiology</Link>
                <Link to="/departments/pulmonology" onClick={() => setIsOpen(false)}>Pulmonology</Link>
                <Link to="/departments/dental-care" onClick={() => setIsOpen(false)}>Dental Care</Link>
              </div>
            )}

            {/* MOBILE DOCTORS */}
            <button
              onClick={() => setDoctorOpen(!doctorOpen)}
              className="flex justify-between items-center text-lg py-2 hover:text-blue-600 transition"
            >
              Doctors <span>{doctorOpen ? "−" : "+"}</span>
            </button>

            {doctorOpen && (
              <div className="ml-3 flex flex-col gap-3 text-base border-l pl-4 border-gray-300">
                <Link to="/doctors" onClick={() => setIsOpen(false)}>All Doctors</Link>
                <Link to="/doctors/1" onClick={() => setIsOpen(false)}>Doctor Profile</Link>
                <Link to="/doctors/1/appointment" onClick={() => setIsOpen(false)}>Book Appointment</Link>
              </div>
            )}

            <Link
              to="/contact"
              className="py-2 text-lg hover:text-blue-600 transition"
              onClick={() => {
                setActive("Contact");
                setIsOpen(false);
              }}
            >
              Contact Us
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
