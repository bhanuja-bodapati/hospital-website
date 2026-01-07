import { useParams, Link } from "react-router-dom";
import { departments } from "../data/departments";

const DepartmentSingle = () => {
  const { slug } = useParams();
  const department = departments.find(d => d.slug === slug);

  if (!department) {
    return <div className="py-24 text-center">Department not found</div>;
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[2fr_1fr] gap-16">

        {/* LEFT CONTENT */}
        <div>
          <img
            src={department.image}
            alt={department.title}
            className="w-full rounded-xl mb-8"
          />

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {department.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {department.description}

          </p>

          <h3 className="text-lg font-semibold mb-3">Service Features</h3>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Advanced diagnostic services</li>
            <li>Experienced specialists</li>
            <li>Emergency care available</li>
            <li>Modern equipment & facilities</li>
          </ul>

          <Link
            to="/doctors"
            className="inline-block mt-8 bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition"
          >
            Make an Appointment 
          </Link>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="bg-gray-50 p-6 rounded-xl h-fit">
          <h4 className="font-semibold mb-4">Time Schedule</h4>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>Monday - Friday: 09:00 - 17:00</li>
            <li>Saturday: 09:00 - 14:00</li>
            <li>Sunday: Closed</li>
          </ul>

          <div className="mt-6 border-t pt-4">
            <p className="text-sm text-gray-500">Need Urgent Help?</p>
            <p className="text-lg font-bold text-blue-700">
              9676034783
            </p>
          </div>
        </aside>

      </div>
    </section>
  );
};

export default DepartmentSingle;
