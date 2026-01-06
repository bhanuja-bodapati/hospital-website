import { Link } from "react-router-dom";
 const Hero = () => { 
  return ( 
  <section className="relative min-h-[520px] md:min-h-[600px] flex items-center" 
  style={{ backgroundImage: "url('/about/background1.jpg')", backgroundSize: "cover", backgroundPosition: "center", }} > {/* Content */} 
  <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center text-white"> 
    
    {/* LEFT CONTENT */} 
    <div> 
      <h1 className="text-4xl md:text-5xl font-bold leading-tight"> Caring for Life,<br /> Every Moment </h1> 
      <p className="mt-5 text-blue-100 max-w-md"> Advanced healthcare with expert doctors and modern facilities. </p> 
      {/* ✅ BOOK APPOINTMENT → CONTACT PAGE */} 
      <Link to="/contact"> 
      <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl"> Book Appointment </button> 
      </Link> 
      </div> 
      </div> 
      </section> 
      ); 
    }; 
    export default Hero;