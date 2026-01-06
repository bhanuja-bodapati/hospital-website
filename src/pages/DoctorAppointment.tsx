import { useParams } from "react-router-dom";
import { useState } from "react";
import { doctors } from "../data/doctors";

const DoctorAppointment = () => {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors.find((doc) => doc.id === Number(id));

  const [success, setSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  if (!doctor) {
    return <div className="py-24 text-center">Doctor not found</div>;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(true);
    setShowPopup(true);
    e.currentTarget.reset();
  };

  const phoneNumber = "9676034783"; // 👈 Updated phone number

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative h-[260px] md:h-[320px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/about/background1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-white">
          <p className="uppercase text-sm tracking-widest mb-2">
            Book Your Seat
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Appointment
          </h1>
        </div>
      </section>

      {/* ================= APPOINTMENT SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">

          {/* LEFT – Doctor Info */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-40 h-40 rounded-full object-cover shadow-lg mb-6"
            />

            <h2 className="text-2xl font-bold mb-1">
              {doctor.name}
            </h2>

            <p className="text-blue-600 mb-4">
              {doctor.specialty}
            </p>

            <p className="text-gray-600 mb-6 max-w-md">
              Schedule an appointment with {doctor.name}. Our specialists are
              committed to delivering high-quality medical care with compassion.
            </p>

            {/* 👇 Updated phone number */}
            <a href={`tel:${phoneNumber}`} className="text-3xl font-bold text-blue-700 hover:underline">
              {phoneNumber}
            </a>
          </div>

          {/* RIGHT – FORM */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Book an Appointment
            </h3>

            {success && (
              <div className="mb-6 p-4 rounded-md bg-green-100 text-green-700 font-medium">
                ✅ Successfully booked your appointment!
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                value={doctor.name}
                readOnly
                name="doctor"
                className="border px-4 py-3 bg-gray-100 md:col-span-2"
              />

              <input type="date" required name="date" className="border px-4 py-3" />
              <input type="time" required name="time" className="border px-4 py-3" />

              <input type="text" placeholder="Full Name" required name="name" className="border px-4 py-3" />
              <input type="tel" placeholder="Phone Number" required name="phone" className="border px-4 py-3" />

              <textarea
                placeholder="Your Message"
                rows={4}
                name="message"
                className="border px-4 py-3 md:col-span-2"
              ></textarea>

              {/* 👇 Updated hidden phone field too if needed */}
              <input type="hidden" name="_next" value="" />
              <input type="hidden" name="_phone" value={phoneNumber} />

              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 transition text-white px-6 py-3 rounded-md md:col-span-2 w-fit"
              >
                MAKE APPOINTMENT 
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ================= SUCCESS POPUP ================= */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center relative">

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <div className="text-green-600 text-4xl mb-4">✅</div>

            <h2 className="text-2xl font-bold mb-2">
              Appointment Booked!
            </h2>

            <p className="text-gray-600 mb-6">
              Your appointment with <strong>{doctor.name}</strong> has been
              successfully scheduled.
            </p>

            {/* 👇 Updated phone number in popup if you want to show */}
            <p className="text-sm text-gray-500 mb-4">Contact Number: {phoneNumber}</p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
            >
              OK
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default DoctorAppointment;
