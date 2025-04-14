import { FaQuestionCircle, FaCheckCircle } from "react-icons/fa";

const DecisionToggle = ({ value = false, onChange }) => {
  const handleToggle = () => {
    onChange && onChange(!value);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Toggle Button */}
      <div
        className={`relative w-24 h-12 rounded-full cursor-pointer transition-colors duration-300 ${
          value ? "bg-green-500" : "bg-red-500"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            value ? "right-1" : "left-1"
          }`}
        >
          {value ? (
            <FaCheckCircle className="text-white text-2xl" />
          ) : (
            <FaQuestionCircle className="text-white text-2xl" />
          )}
        </div>
      </div>

      {/* Text next to icon */}
      <div
        className={`text-xl font-medium ${
          value ? "text-green-600" : "text-red-600"
        }`}
      >
        {value ? "Made" : "Not Made"}
      </div>
    </div>
  );
};

export default DecisionToggle;
