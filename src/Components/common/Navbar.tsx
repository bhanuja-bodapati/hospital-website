import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  const navLink =
    "relative py-2 cursor-pointer after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center">

        {/* LEFT - LOGO */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          MediCare
        </Link>

        <nav className="hidden md:flex gap-8 text-gray-800 font-semibold items-center absolute left-1/2 -translate-x-1/2">
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

          <Link
            to="/departments"
            onClick={() => setActive("Departments")}
            className={navLink + (active === "Departments" ? " after:w-full text-blue-600" : "")}
          >
            Departments
          </Link>

          <Link
            to="/doctors"
            onClick={() => setActive("Doctors")}
            className={navLink + (active === "Doctors" ? " after:w-full text-blue-600" : "")}
          >
            Doctors
          </Link>

          <Link
            to="/contact"
            onClick={() => setActive("Contact")}
            className={navLink + (active === "Contact" ? " after:w-full text-blue-600" : "")}
          >
            Contact Us
          </Link>
        </nav>

        <button
          className="ml-auto flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

     
      {isOpen && (
        <div className="bg-white border-t border-gray-200">
          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-900 font-semibold">

            <Link to="/" onClick={() => { setActive("Home"); setIsOpen(false); }}> 
              Home
            </Link>

            <Link to="/about" onClick={() => { setActive("About"); setIsOpen(false); }}>
              About Us
            </Link>

            <Link to="/departments" onClick={() => { setActive("Departments"); setIsOpen(false); }}>
              Departments
            </Link>

            <Link to="/doctors" onClick={() => { setActive("Doctors"); setIsOpen(false); }}>
              Doctors
            </Link>

            <Link to="/contact" onClick={() => { setActive("Contact"); setIsOpen(false); }}>
              Contact Us
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
