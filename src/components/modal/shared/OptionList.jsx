import { twMerge } from "tailwind-merge";

const OptionList = ({ children, className }) => {
  return (
    <div className={twMerge("no-select w-full flex flex-col", className)}>
      {children}
    </div>
  );
};

export default OptionList;
