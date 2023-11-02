import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <div className={twMerge("relative card p-4 rounded-lg", className)}>
      {children}
    </div>
  );
};

export default Container;
