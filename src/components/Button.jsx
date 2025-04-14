const Button = ({ text }) => {
  return (
    <div className="relative w-full md:w-[70%] text-center text-base p-3 font-medium border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out xl:text-2xl xl:p-6 xl:font-semibold xl:w-auto rounded-xl">
      {text}
    </div>
  );
};

export default Button;
