interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
