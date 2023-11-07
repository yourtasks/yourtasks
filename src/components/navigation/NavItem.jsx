import Link from "next/link";
import { twMerge } from "tailwind-merge";

const NavItem = ({
  Icon,
  title,
  current,
  href,
  activeIcon,
  className,
  count,
}) => {
  const isActive = current === href;

  return (
    <Link
      href={href === "/" ? href : `/${href}`}
      className={twMerge(
        `relative w-1/4 sm:w-full py-2 flex flex-col sm:flex-col sm:text-xs md:flex-row items-center gap-x-4 px-4 rounded-md no-select transition ${
          isActive
            ? "bg-cyan sm:font-semibold scale-105 text-white"
            : "click opacity-80"
        }`,
        className
      )}
    >
      {Icon && <div className="">{isActive ? activeIcon : Icon}</div>}
      <p className="text-[10px] sm:text-xs md:text-sm text-center md:text-start">
        {title}
      </p>
      {count && (
        <p className="absolute sm:top-[10%] md:top-[25%] right-[25%] sm:right-[30%] md:right-4 text-xs sm:text-sm h-5 w-5 flex items-center justify-center bg-rose-500 text-white font-medium rounded-full">
          {count}
        </p>
      )}
    </Link>
  );
};

export default NavItem;
