const Input = ({ id, name, type, placeholder, value, onChange }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm xl:text-xl`}
    />
  );
};

export default Input;
