const Label = ({ htmlFor, text }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block font-medium text-gray-700 mb-1 text-xl`}
    >
      {text}
    </label>
  );
};

export default Label;
