// import { Link } from "react-router-dom";
// import { doctors } from "../../data/doctors";

// const AboutDoctorsSection = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* ===== Heading ===== */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Meet Our Specialist
//           </h2>

//           <div className="w-10 h-1 bg-pink-600 mx-auto my-4"></div>

//           <p className="text-gray-500 text-sm md:text-base">
//             Today’s users expect effortless experiences. Don’t let essential
//             people and processes stay stuck in the past.
//           </p>
//         </div>

//         {/* ===== Doctors Grid ===== */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//           {doctors.slice(0, 4).map((doctor) => (
//             <Link
//               key={doctor.id}
//               to={`/doctors/${doctor.id}`}
//               className="group text-center"
//             >
//               {/* Image */}
//               <div className="overflow-hidden rounded-lg shadow-md">
//                 <img
//                   src={doctor.image}
//                   alt={doctor.name}
//                   className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
//                 />
//               </div>

//               {/* Info */}
//               <h3 className="mt-5 text-lg font-semibold text-gray-900">
//                 {doctor.name}
//               </h3>

//               <p className="text-sm text-blue-600 mt-1">
//                 {doctor.specialty}
//               </p>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutDoctorsSection;
