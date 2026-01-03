const WhyChooseUs = () => {
  return (
    <section className="bg-[#f6fafc] py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b2c4d] mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Your health is our priority, delivered with trust, innovation,
            and compassionate care.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition text-center">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 text-2xl">
              🩺
            </div>
            <h3 className="font-semibold text-lg text-[#0b2c4d] mb-3">
              Expert Medical Care
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Access to 150+ experienced specialists delivering
              world-class medical treatment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition text-center">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-green-50 text-green-600 text-2xl">
              🧠
            </div>
            <h3 className="font-semibold text-lg text-[#0b2c4d] mb-3">
              Cutting-Edge Technology
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Advanced diagnostic and treatment technologies for
              precise and effective care.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition text-center">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 text-2xl">
              🌱
            </div>
            <h3 className="font-semibold text-lg text-[#0b2c4d] mb-3">
              Patient-Centered Care
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Personalized treatment plans focused on your comfort,
              recovery, and lifestyle.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition text-center">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-yellow-50 text-yellow-600 text-2xl">
              🛡️
            </div>
            <h3 className="font-semibold text-lg text-[#0b2c4d] mb-3">
              Accredited Excellence
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              ISO-certified systems ensuring the highest standards
              of safety and quality.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
