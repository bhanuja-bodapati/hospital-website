import Hero from "../sections/home/Hero";

import Services from "../sections/home/Services";
import WhyChooseUs from "../sections/home/WhyChooseUs";
import DoctorsPreview from "../sections/home/DoctorsPreview";
import Stats from "../sections/home/Stats";
import Testimonials from "../sections/home/Testimonials";

import HomeCTA from "../sections/home/HomeCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <DoctorsPreview />
       <Stats />
      <Services />
      <WhyChooseUs />
      
     
      <Testimonials />
    
      <HomeCTA />
    </>
  );
};

export default Home;
