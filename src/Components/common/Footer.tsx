import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-xl">
            MediCare
          </h3>
          <p className="text-sm leading-relaxed">
            World-class healthcare with compassion and innovation.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/doctors" className="hover:text-white transition">
                Doctors
              </Link>
            </li>
            <li>
              <Link to="/departments" className="hover:text-white transition">
                Departments
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* DEPARTMENTS */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Departments
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/departments/ophthalmology"
                className="hover:text-white transition"
              >
                Ophthalmology
              </Link>
            </li>
            <li>
              <Link
                to="/departments/cardiology"
                className="hover:text-white transition"
              >
                Cardiology
              </Link>
            </li>
            <li>
              <Link
                to="/departments/pulmonology"
                className="hover:text-white transition"
              >
                Pulmonology
              </Link>
            </li>
            <li>
              <Link
                to="/departments/dental-care"
                className="hover:text-white transition"
              >
                Dental Care
              </Link>
            </li>
            <li>
              <Link
                to="/departments/heart surgeon"
                className="hover:text-white transition"
              >
                Heart Surgeon
              </Link>
            </li>
            <li>
              <Link
                to="/departments/cancer doctor"
                className="hover:text-white transition"
              >
                Cancer Doctor 
              </Link>
            </li>
            <li>
              <Link
                to="/departments/bone marrow transplant"
                className="hover:text-white transition"
              >
                Bone Marrow Transplant
              </Link>
            </li>
            <li>
              <Link
                to="/departments/spine surgeon"
                className="hover:text-white transition"
              >
                Spine Surgeon
              </Link>
            </li>
            <li>
              <Link
                to="/departments/liver transplant"
                className="hover:text-white transition"
              >
                Liver Transplant
              </Link>
            </li>
          </ul>
        </div>

        {/* EMERGENCY */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Emergency
          </h4>
          <p className="text-sm mb-1">24/7 Support</p>
          <a
            href="tel:+919876543210"
            className="text-lg font-bold text-white hover:text-red-400 transition"
          >
            +91 98765 43210
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MediCare Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
