"use client";
import React, { useRef } from "react";

const RadioInput = ({ title = "title", ...props }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef) {
      inputRef.current.click();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="w-fit p-4 rounded-lg border-2 border-color flex items-center gap-x-2 capitalize font-medium"
    >
      <p>{title}</p>
      <input ref={inputRef} type="radio" className="input-field" {...props} />
    </div>
  );
};

export default RadioInput;
