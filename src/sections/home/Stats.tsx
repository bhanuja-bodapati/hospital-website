import { stats } from "../../data/stats";

const Stats = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(stat => (
          <div key={stat.id}>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
