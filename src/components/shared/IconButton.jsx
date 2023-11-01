import { twMerge } from "tailwind-merge";

const IconButton = ({ children, className }) => {
  return (
    <div className={twMerge("w-fit h-fit p-2 rounded-full click", className)}>
      {children}
    </div>
  );
};

export default IconButton;
