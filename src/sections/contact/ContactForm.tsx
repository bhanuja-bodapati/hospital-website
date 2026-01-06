import { useState } from "react";

const ContactForm: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhone(value);
      setPhoneError("");
    }
  };

  const isValidIndianMobile = (num: string) => /^[6-9][0-9]{9}$/.test(num);

  return (
    <section className="py-16 bg-[#f4f9ff]">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

        {/* LEFT SIDE – FORM */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Appointment</h2>

          <form
            action="https://formsubmit.co/bhanujabodapati@gmail.com"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            onSubmit={(e) => {
              if (!isValidIndianMobile(phone)) {
                e.preventDefault();
                setPhoneError("Enter a valid Indian mobile number starting with 6–9");
              }
            }}
          >
            {/* FormSubmit Config */}
            <input type="hidden" name="_subject" value="New Appointment Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* INPUTS */}
            <input
              type="text"
              name="name"
              placeholder="Doctor Name"
              required
              className="border border-gray-300 px-4 py-3 rounded-xl"
            />

            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="Phone Number"
                required
                className="border border-gray-300 px-4 py-3 rounded-xl w-full"
              />
              {phoneError && <p className="absolute -bottom-5 left-1 text-red-500 text-xs">{phoneError}</p>}
            </div>

            <input
              type="text"
              name="medical_record"
              placeholder="Medical Record Number"
              required
              className="border border-gray-300 px-4 py-3 rounded-xl md:col-span-2"
            />

            {/* DROPDOWNS */}
            <select
              name="reason"
              required
              className="border border-gray-300 px-4 py-3 rounded-xl text-gray-600"
            >
              <option value="" disabled selected>Reason for Visit</option>
              <option>General Checkup</option>
              <option>Consultation</option>
              <option>Emergency</option>
            </select>

            <select
              name="department"
              required
              className="border border-gray-300 px-4 py-3 rounded-xl text-gray-600"
            >
              <option value="" disabled selected>Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
              <option>Dental</option>
              <option>Pediatric</option>
            </select>

            {/* DATE & TIME */}
            <input
              type="date"
              name="date"
              required
              className="border border-gray-300 px-4 py-3 rounded-xl text-gray-600"
            />

            <input
              type="time"
              name="time"
              required
              className="border border-gray-300 px-4 py-3 rounded-xl text-gray-600"
            />

            {/* MESSAGE BOX */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              required
              className="border border-gray-300 px-4 py-3 rounded-xl md:col-span-2"
            ></textarea>

            {/* SUBMIT */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl font-semibold md:col-span-2 w-fit mx-auto"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT SIDE – IMAGE CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>

          <div className="w-full h-[320px] rounded-xl overflow-hidden border border-gray-300 flex items-center justify-center bg-gray-100">
            <img
              src="/contact/call.jpg"
              alt="Hospital Support"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-6 space-y-4 text-gray-700">
            <p><strong>Phone:</strong> +91 96760 34783</p>
            <p><strong>Email Us:</strong> bhanujabodapati@gmail.com</p>
            <p><strong>Our Location:</strong> Hyderabad, India</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
