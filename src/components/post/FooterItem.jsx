import { twMerge } from "tailwind-merge";

const FooterItem = ({ Icon, count, className }) => {
  return (
    <div
      className={twMerge(
        "w-full py-2 click flex items-center justify-center rounded-md gap-x-2 no-select opacity-70",
        className
      )}
    >
      {Icon && <div>{Icon}</div>}
      <p className="font-medium text-sm">{count}</p>
    </div>
  );
};

export default FooterItem;
