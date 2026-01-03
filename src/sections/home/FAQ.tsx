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

type Message = {
  sender: "bot" | "user";
  text: string;
};

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(null);
  const [openChat, setOpenChat] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "👋 Hi! Welcome to MediCare Hospitals. How may I help you today?",
    },
    {
      sender: "bot",
      text: "Please tell me what you would like to know 😊",
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botReply: Message = {
        sender: "bot",
        text:
          "Thank you for contacting MediCare Hospitals 🙏 Our support team will assist you shortly. Meanwhile, you can explore the FAQs above.",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#f4fbff] to-white py-16 relative">
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

      {/* HELP BUTTON */}
      {!openChat && (
        <div
          className="fixed bottom-5 right-5 z-50 cursor-pointer"
          onClick={() => setOpenChat(true)}
        >
          <div className="bg-[#ffe14d] rounded-2xl px-5 py-4 shadow-lg flex items-center gap-3 max-w-xs">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              💬
            </div>
            <div>
              <p className="font-semibold text-sm text-black">
                Hi, Need some help?
              </p>
              <p className="text-xs text-black/80">
                I'm happy to assist.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CHAT BOX */}
      {openChat && (
        <div className="fixed bottom-5 right-5 z-50 w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="bg-[#0076a8] text-white px-4 py-3 flex justify-between items-center">
            <p className="font-semibold text-sm">MediCare Support</p>
            <button onClick={() => setOpenChat(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="p-4 h-[260px] overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-lg
                ${
                  msg.sender === "bot"
                    ? "bg-gray-100 text-gray-700"
                    : "bg-[#0076a8] text-white ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t px-3 py-2 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-[#0076a8] text-white px-4 rounded-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
