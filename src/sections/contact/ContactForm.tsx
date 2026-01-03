import { useState } from "react";

const ContactForm = () => {
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
    <section className="py-16 md:py-24 bg-[#f4f9ff]">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6">
            Contact MediCare Hospital
          </h2>

          <form
            action="https://formsubmit.co/bhanujabodapati@gmail.com"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={(e) => {
              if (!isValidIndianMobile(phone)) {
                e.preventDefault(); // ❗ stop ONLY if invalid
                setPhoneError(
                  "Enter a valid 10-digit Indian mobile number starting with 6–9"
                );
              }
            }}
          >
            {/* FormSubmit config */}
            <input type="hidden" name="_subject" value="New Appointment Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="border px-4 py-3 rounded-lg md:col-span-2"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="border px-4 py-3 rounded-lg md:col-span-2"
            />

            <div className="md:col-span-2">
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="10-digit Mobile Number"
                required
                className="border px-4 py-3 rounded-lg w-full"
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="border px-4 py-3 rounded-lg md:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg md:col-span-2"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
