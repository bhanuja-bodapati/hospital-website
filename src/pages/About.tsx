import AboutHero from "../sections/about/AboutHero";
import MissionVision from "../sections/about/MissionVision";

import AboutServicesSection from "../sections/about/AboutServicesSection";
// import AboutDoctorsSection from "../sections/about/AboutDoctorsSection";
import AboutCTA from "../sections/about/AboutCTA";

const About = () => {
  return (
    <>
      <AboutHero />
      <MissionVision />
      
      <AboutServicesSection/>
      {/* <AboutDoctorsSection/> */}
      <AboutCTA />
    </>
  );
};

export default About;
