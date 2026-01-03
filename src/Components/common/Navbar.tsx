import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [doctorOpen, setDoctorOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  const navLink =
    "relative py-2 cursor-pointer after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-pink-600 after:transition-all hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MediCare
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex gap-8 text-gray-800 font-medium items-center">

          <Link to="/" className={navLink}>Home</Link>
          <Link to="/about" className={navLink}>About</Link>

          {/* ================= DEPARTMENTS DROPDOWN ================= */}
          <div className="relative group">
            <span className={`${navLink} flex items-center gap-1`}>
              Department <span className="text-xs">▾</span>
            </span>

            <div
              className="
                absolute left-0 top-full w-56 bg-white
                border-t-2 border-pink-600
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition
              "
            >
              <Link
                to="/departments"
                className="block px-5 py-3 text-sm hover:text-pink-600 border-b"
              >
                Departments
              </Link>

              <Link
                to="/departments/ophthalmology"
                className="block px-5 py-3 text-sm hover:text-pink-600"
              >
                Department Single
              </Link>
            </div>
          </div>

          {/* ================= DOCTORS DROPDOWN ================= */}
          <div className="relative group">
            <span className={`${navLink} flex items-center gap-1`}>
              Doctors <span className="text-xs">▾</span>
            </span>

            <div
              className="
                absolute left-0 top-full w-56 bg-white
                border-t-2 border-pink-600
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition
              "
            >
              <Link
                to="/doctors"
                className="block px-5 py-3 text-sm hover:text-pink-600 border-b"
              >
                Doctors
              </Link>

              <Link
                to="/doctors/1"
                className="block px-5 py-3 text-sm hover:text-pink-600 border-b"
              >
                Doctor Single
              </Link>

              <Link
                to="/doctors/1/appointment"
                className="block px-5 py-3 text-sm hover:text-pink-600"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          <Link to="/contact" className={navLink}>Contact</Link>
        </nav>

        {/* ================= MOBILE HAMBURGER ================= */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-800 font-medium">

            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>

            {/* Mobile Departments */}
            <button
              onClick={() => setDeptOpen(!deptOpen)}
              className="flex justify-between items-center"
            >
              Department <span>{deptOpen ? "−" : "+"}</span>
            </button>

            {deptOpen && (
              <div className="ml-4 flex flex-col gap-2 text-sm">
                <Link to="/departments" onClick={() => setIsOpen(false)}>
                  Departments
                </Link>
                <Link
                  to="/departments/ophthalmology"
                  onClick={() => setIsOpen(false)}
                >
                  Department Single
                </Link>
              </div>
            )}

            {/* Mobile Doctors */}
            <button
              onClick={() => setDoctorOpen(!doctorOpen)}
              className="flex justify-between items-center"
            >
              Doctors <span>{doctorOpen ? "−" : "+"}</span>
            </button>

            {doctorOpen && (
              <div className="ml-4 flex flex-col gap-2 text-sm">
                <Link to="/doctors" onClick={() => setIsOpen(false)}>
                  Doctors
                </Link>
                <Link to="/doctors/1" onClick={() => setIsOpen(false)}>
                  Doctor Single
                </Link>
                <Link
                  to="/doctors/1/appointment"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            )}

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
