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
        "flex items-center gap-x-1 text-lg opacity-90",
        className
      )}
    >
      <IconButton onClick={onClick}>
        <div>{active ? activeIcon : Icon}</div>
      </IconButton>
      <p className="text-xs font-medium opacity-80">{count}</p>
    </div>
  );
};

export default FooterItem;
