import { useState, useRef, useEffect } from "react";

const TextArea = ({ id, name, placeholder, value, onChange }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm xl:text-xl resize-none overflow-hidden"
      value={value}
      onChange={onChange}
      ref={textareaRef}
      rows={1}
    />
  );
};

export default TextArea;
