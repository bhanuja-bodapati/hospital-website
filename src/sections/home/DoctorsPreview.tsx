import React, { useEffect, useRef } from "react";
import DoctorCard from "../../Components/cards/DoctorCard";
import { doctors } from "../../data/doctors";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DoctorsPreview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]); // 👈 Correct type

  useEffect(() => {
    // Section reveal animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
    );

    // Card reveal animations
    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-12 sm:pt-14 md:pt-16 lg:pt-20 pb-10 px-2 sm:px-4 md:px-6"
    >

      {/* HEADER */}
      <div className="text-center mb-5">
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[2px] text-pink-500 mb-1">
          Trusted Care Team
        </p>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
          Meet Our Doctors
        </h2>
        <p className="text-gray-500 text-[11px] sm:text-sm md:text-base max-w-md mx-auto">
          Specialists chosen for skill, compassion, and excellence in patient care.
        </p>
      </div>

      {/* DOCTORS GRID */}
      <div
        className="grid gap-5 w-full max-w-6xl mx-auto
                   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3
                   place-items-center"
      >
        {doctors.slice(0, 9).map((doc, i) => (
          <div
            key={doc.id}
            ref={(el) => {
              if (el) cardsRef.current[i] = el; // 👈 Correct ref assignment
            }}
            className="w-full max-w-[210px] sm:max-w-[230px] md:max-w-[240px] lg:max-w-[260px] rounded-2xl border border-gray-200 p-1
                       transition-all duration-300 ease-out hover:scale-[1.12] hover:shadow-2xl"
          >
            <DoctorCard id={doc.id} image={doc.image} name={doc.name} specialty={doc.specialty} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsPreview;
