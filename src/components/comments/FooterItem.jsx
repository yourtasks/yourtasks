import React from "react";
import IconButton from "../shared/IconButton";
import { twMerge } from "tailwind-merge";

const FooterItem = ({
  count = 2,
  activeIcon,
  Icon = "Icon",
  onClick,
  className,
  active,
}) => {
  return (
    <div
      className={twMerge(
        "no-select flex items-center gap-x-1 text-lg opacity-90",
        className
      )}
    >
      <IconButton onClick={onClick}>
        <div>{active ? activeIcon : Icon}</div>
      </IconButton>
      <p className="text-xs font-medium opacity-80 p-2 click rounded-md">
        {count}
      </p>
    </div>
  );
};

export default FooterItem;
