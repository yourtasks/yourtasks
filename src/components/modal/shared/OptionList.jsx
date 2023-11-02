import { twMerge } from "tailwind-merge";

const OptionList = ({ children, className }) => {
  return (
    <div className={twMerge("w-full flex flex-col gap-y-2", className)}>
      {children}
    </div>
  );
};

export default OptionList;
