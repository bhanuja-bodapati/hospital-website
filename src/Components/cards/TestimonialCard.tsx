interface Props {
  message: string;
  rating: number;
  align?: "left" | "right";
}

const TestimonialCard = ({ message, rating, align = "left" }: Props) => {
  return (
    <div
      className={`flex items-center gap-6 bg-white rounded-2xl p-6 shadow-md
      ${align === "right" ? "flex-row-reverse text-right" : ""}`}
    >
      {/* Avatar */}
      <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
        <span className="text-white text-2xl">👤</span>
      </div>

      {/* Content */}
      <div>
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          {message}
        </p>

        {/* Stars */}
        <div className={`flex gap-1 ${align === "right" ? "justify-end" : ""}`}>
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-orange-400 text-lg">★</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
