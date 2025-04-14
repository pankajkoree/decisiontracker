const Input = ({ id, name, type, placeholder }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl`}
    />
  );
};

export default Input;
