import React, { useEffect, useRef, useState } from "react";
import DoctorCard from "../../Components/cards/DoctorCard";
import { doctors } from "../../data/doctors";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DoctorsPreview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<HTMLDivElement[]>([]);
  const [expanded, setExpanded] = useState(false);

  // Split into rows of 3
  const chunkSize = 3;
  const allRows = [];
  for (let i = 0; i < doctors.length; i += chunkSize) {
    allRows.push(doctors.slice(i, i + chunkSize));
  }

  // Show only 2 rows when collapsed
  const visibleRows = expanded ? allRows : allRows.slice(0, 2);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    rowsRef.current.forEach((row) => {
      if (!row) return;
      gsap.fromTo(
        row.children,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, [expanded]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-4 pb-12 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20"
    >

      {/* HEADER */}
      <div className="text-center mb-8">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[2px] text-pink-500 mb-2">
          Trusted Care Team
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
          Meet Our Doctors
        </h2>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          Specialists dedicated to compassionate healthcare and excellence in patient care.
        </p>
      </div>

      {/* GRID ROWS */}
      <div className="w-full space-y-6">
        {visibleRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            ref={(el) => { if (el) rowsRef.current[rowIndex] = el; }}
            className="grid gap-5 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-stretch"
          >
            {row.map((doc) => (
              <div key={doc.id} className="flex justify-center">
                <DoctorCard
                  id={doc.id}
                  image={doc.image}
                  name={doc.name}
                  specialty={doc.specialty}
                  phone="9676034783"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="text-center mt-10 flex justify-center gap-4">
        {!expanded && allRows.length > 2 && (
          <button
            onClick={() => setExpanded(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            View More
          </button>
        )}

        {expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-300 transition"
          >
            View Less 
          </button>
        )}
      </div>

    </section>
  );
};

export default DoctorsPreview;
