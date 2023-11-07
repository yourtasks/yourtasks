import { twMerge } from "tailwind-merge";

const Container = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(
        `sm:rounded-lg w-full py-2 flex flex-col gap-y-2 card`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
