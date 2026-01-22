import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const carouselInnerRef = useRef<HTMLDivElement>(null);

  const images = [
    "/about/background1.jpg",
    
  ];

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });

    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 })
      .fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .fromTo(btnRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5 }, "-=0.2");

   
    gsap.to(carouselInnerRef.current, {
      xPercent: -100 * (images.length), 
      duration: 24,  
      repeat: -1,
      ease: "none",
      snap: {
        xPercent: -100
      }
    });

  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden">

      {/* Carousel Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="flex w-full h-full" ref={carouselInnerRef}>
          {/* Duplicate for infinite loop */}
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="w-full h-full flex-shrink-0"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
      </div>

    
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center text-white w-full">
        <div>
          <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold leading-tight">
            Caring for Life,<br /> Every Moment
          </h1>

          <p ref={textRef} className="mt-5 text-blue-100 max-w-md text-lg">
            Advanced healthcare with expert doctors and modern facilities.
          </p>

          <Link to="/contact">
            <button ref={btnRef} className="mt-8 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl text-lg font-semibold">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Hero;
