import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import DoctorSingle from "./pages/DoctorSingle";
import DoctorAppointment from "./pages/DoctorAppointment";
import Departments from "./pages/Departments";
import DepartmentSingle from "./pages/DepartmentSingle";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <BrowserRouter>

      {/* ===== GLOBAL NAVBAR ===== */}
      <Navbar />

      {/* ===== PAGE CONTENT ===== */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorSingle />} />
          <Route
            path="/doctors/:id/appointment"
            element={<DoctorAppointment />}
          />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:slug" element={<DepartmentSingle />} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>
      </main>

      {/* ===== GLOBAL FOOTER ===== */}
      <Footer />

    </BrowserRouter>
  );
};

export default App;
