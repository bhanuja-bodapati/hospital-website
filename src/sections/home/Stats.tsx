import { useEffect, useRef } from "react";
import { stats } from "../../data/stats";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true, // play only once
        },
      });

      // Section fade-in
      tl.from(sectionRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power1.out",
      })

        // Stats animation
        .from(
          ".stat-item",
          {
            opacity: 0,
            y: 50,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.25,
          },
          "-=0.2" // overlaps slightly with section fade
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-blue-600 text-white py-[1.5rem]"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-item">
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
