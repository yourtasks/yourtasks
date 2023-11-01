"use client";

import { twMerge } from "tailwind-merge";
import { AiOutlineLoading } from "react-icons/ai";

const Button = ({
  title = "button",
  className,
  onClick,
  size,
  loading,
  disabled,
}) => {
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={twMerge(
        "button flex items-center justify-center gap-x-2",
        className
      )}
    >
      {loading && (
        <div className="animate-spin">
          <AiOutlineLoading size={20} />
        </div>
      )}
      <p>{title}</p>
    </button>
  );
};

export default Button;
