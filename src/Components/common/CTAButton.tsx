interface Props {
  text: string;
}

const CTAButton: React.FC<Props> = ({ text }) => (
  <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
    {text}
  </button>
);

export default CTAButton;
