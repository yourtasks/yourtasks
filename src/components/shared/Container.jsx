import React from "react";
import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-2 items-center">
      <div
        className={twMerge(
          "h-full w-full min-w-[300px] sm:max-w-[90%] md:max-w-[80%] flex flex-col gap-y-2",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
