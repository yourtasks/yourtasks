import React from "react";
import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-2 items-center py-2">
      <div
        className={twMerge(
          "h-full w-full sm:w-[500px] flex flex-col gap-y-2",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
