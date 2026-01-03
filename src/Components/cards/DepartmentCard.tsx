import { Link } from "react-router-dom";
import type { Department } from "../../data/departments";

interface Props {
  department: Department;
}

const DepartmentCard = ({ department }: Props) => {
  return (
    <Link
      to={`/departments/${department.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition block"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={department.image}
          alt={department.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {department.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {department.description}
        </p>

        <span className="inline-flex items-center text-blue-700 font-medium text-sm">
          Learn More →
        </span>
      </div>
    </Link>
  );
};

export default DepartmentCard;
