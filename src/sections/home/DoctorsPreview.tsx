import { useEffect, useRef } from "react";
import DoctorCard from "../../Components/cards/DoctorCard";
import { doctors } from "../../data/doctors";
import { gsap } from "gsap";

const DoctorsPreview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-4 py-12 overflow-hidden"
    >
      {/* HEADER */}
      <div className="text-center mb-8 mt-2">
        <p className="text-xs font-semibold uppercase tracking-[3px] text-pink-500 mb-2">
          Trusted Care Team
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Meet Our Doctors
        </h2>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-lg mx-auto">
          Specialists chosen for skill, compassion, and excellence in patient care.
        </p>
      </div>

      {/* GRID 3×3 RESPONSIVE */}
      <div
        ref={cardsRef}
        className="grid gap-6 w-full max-w-6xl mx-auto
                   grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                   place-items-center"
      >
        {doctors.slice(0, 9).map((doc) => (
          <div
            key={doc.id}
            className="w-full max-w-[240px] hover:-translate-y-2 transition-all duration-300 rounded-2xl border border-gray-200"
          >
            <DoctorCard id={doc.id} image={doc.image} name={doc.name} specialty={doc.specialty} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsPreview;
