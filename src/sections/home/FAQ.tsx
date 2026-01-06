import { useState } from "react";

const faqs = [
  "How can I book an appointment at MediCare Hospitals?",
  "Can I seek an appointment with a specialist at MediCare Hospitals even if I don’t have a local referral?",
  "Does MediCare Hospitals offer second opinions or online consultations?",
  "What type of information do I need to provide before booking a medical appointment?",
  "Will I be informed about the cost of treatment and duration of stay at MediCare Hospitals?",
  "What documents should I carry for my hospital visit or admission?",
  "What are the visiting hours and policies for patients’ families?",
  "Are international patients provided assistance with travel, visas, and accommodation?",
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full bg-gradient-to-b from-[#f4fbff] to-white py-16">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#003a5d]">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 text-sm md:text-base mt-3 max-w-3xl mx-auto">
          Find answers to common questions about our services, treatments,
          appointments, and patient care options at MediCare Hospitals.
        </p>

        {/* FAQ List */}
        <div className="mt-10 space-y-5">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="bg-white border border-[#b6dff2] rounded-2xl px-6 py-5 cursor-pointer"
              onClick={() => setActive(active === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-[#003a5d] text-sm md:text-base font-medium">
                  {question}
                </p>

                <span
                  className={`w-8 h-8 rounded-full border-2 border-[#0076a8]
                  flex items-center justify-center text-[#0076a8] text-xl
                  transition-transform duration-300
                  ${active === index ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300
                ${active === index ? "max-h-32 mt-4" : "max-h-0"}`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  You can book an appointment online through the MediCare Hospitals
                  website, mobile app, or by calling our 24/7 appointment helpline.
                  Walk-in appointments may also be available.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
