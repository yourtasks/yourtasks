import React from "react";

const Container = ({ children }) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-2 items-center overflow-y-auto py-2">
      <div className="w-full sm:w-[500px] flex flex-col gap-y-2">
        {children}
      </div>
    </div>
  );
};

export default Container;
