import Hero from "../sections/home/Hero";

import Services from "../sections/home/Services";
import WhyChooseUs from "../sections/home/WhyChooseUs";
import DoctorsPreview from "../sections/home/DoctorsPreview";
import Stats from "../sections/home/Stats";
import Testimonials from "../sections/home/Testimonials";
import FAQ from "../sections/home/FAQ";
import HomeCTA from "../sections/home/HomeCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <DoctorsPreview />
      <Services />
      <WhyChooseUs />
      
      <Stats />
      <Testimonials />
      <FAQ />
      <HomeCTA />
    </>
  );
};

export default Home;
