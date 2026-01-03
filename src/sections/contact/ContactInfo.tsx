// src/sections/contact/ContactInfo.tsx
const ContactInfo = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-3">

        {/* Address */}
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <div className="text-4xl mb-4">🏥</div>
          <h3 className="font-semibold text-lg mb-2">Hospital Address</h3>
          <p className="text-gray-600 text-sm">
            MediCare Hospital, Banjara Hills,<br />
            Hyderabad, Telangana – 500034
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <div className="text-4xl mb-4">📞</div>
          <h3 className="font-semibold text-lg mb-2">Call Us</h3>
          <p className="text-gray-600 text-sm">
            +91 98765 43210<br />
            Emergency: 24/7
          </p>
        </div>

        {/* Email */}
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <div className="text-4xl mb-4">✉️</div>
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <p className="text-gray-600 text-sm">
            support@medicare.com<br />
            info@medicare.com
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;
