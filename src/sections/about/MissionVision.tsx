const data = [
  {
    title: "Mission",
    bg: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    icon: "🎯",
    text:
      "Our mission is to deliver affordable, high-quality healthcare services with compassion and integrity. We ensure patient safety, comfort, and trust at every step.",
    color: "bg-blue-500",
  },
  {
    title: "Vision",
    bg: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
    icon: "👁️",
    text:
      "To be a leading healthcare institution recognized for clinical excellence, advanced technology, and patient-centered care worldwide.",
    color: "bg-pink-500",
  },
  {
    title: "Values",
    bg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    icon: "💎",
    text:
      "We uphold integrity, compassion, innovation, teamwork, and excellence in everything we do for our patients and communities.",
    color: "bg-orange-500",
  },
];

const MissionVision = () => {
  return (
    <section className="pt-6 pb-20 bg-white">  {/* Reduced top spacing so content starts faster */}
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== HEADER (Now starts from top) ===== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Company Mission, Vision and Values
          </h2>
        </div>

        {/* ===== CARDS with Hover Zoom ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden text-center 
              transition-transform duration-300 ease-out hover:scale-[1.05] cursor-pointer"
            >
              {/* Image Background */}
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.bg})` }}
              >
                <div className="h-full bg-black/20"></div>
              </div>

              {/* Icon Box */}
              <div
                className={`w-16 h-16 ${item.color} rounded-xl flex items-center justify-center text-white text-2xl mx-auto -mt-8 shadow-lg`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold uppercase mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
