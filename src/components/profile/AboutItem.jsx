import React from "react";
import { BsThreeDots } from "react-icons/bs";
import IconButton from "../shared/IconButton";

const AboutItem = ({ Icon = "Icon", title = "Title", bottom, prefix }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-full flex items-center gap-x-4">
        {Icon && (
          <div className="text-[30px] text-zinc-500 font-semibold">{Icon}</div>
        )}
        <div>
          <h1 className="font-semibold">
            {prefix && (
              <span className="pr-1 opacity-80 font-medium">{prefix}</span>
            )}
            {title}
          </h1>
          {bottom && <p className="text-xs opacity-80">{bottom}</p>}
        </div>
      </div>
      <IconButton>
        <BsThreeDots size={30} />
      </IconButton>
    </div>
  );
};

export default AboutItem;
