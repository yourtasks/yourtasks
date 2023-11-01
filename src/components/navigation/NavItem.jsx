import Link from "next/link";

const NavItem = ({ Icon, title, current, href, activeIcon }) => {
  const isActive = current === href;

  return (
    <Link
      href={href}
      className={`w-full py-2 flex flex-col sm:flex-col sm:text-xs md:flex-row items-center gap-x-4 px-4 rounded-md no-select transition ${
        isActive
          ? "active-navitem sm:font-semibold scale-105 text-white"
          : "click opacity-80"
      }`}
    >
      {Icon && <div className="">{isActive ? activeIcon : Icon}</div>}
      <p className="text-[10px] sm:text-xs md:text-sm text-center md:text-start">
        {title}
      </p>
    </Link>
  );
};

export default NavItem;
