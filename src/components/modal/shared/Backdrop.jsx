import { twMerge } from "tailwind-merge";

const Backdrop = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "fixed top-0 left-0 w-full h-full z-50 bg flex flex-col items-center justify-end sm:justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Backdrop;
