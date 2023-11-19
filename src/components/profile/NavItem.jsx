"use client";
import Link from "next/link";
import { useEffect } from "react";
const NavItem = ({ Icon, path, href, title, activeIcon, onSelect }) => {
  const active = path === href;

  useEffect(() => {
    if (active) {
      onSelect();
    }
  }, [active, onSelect]);

  return (
    <Link
      href={href}
      className={`w-full text-center capitalize font-semibold py-2 pb-3 rounded-md flex items-center justify-center gap-x-2 ${
        active
          ? "text-cyan-500 cursor-default border-b-0 border-cyan-500 rounded-none opacity-100 bg-cyan-500 bg-opacity-10"
          : "click opacity-80"
      }`}
    >
      <div className="lg:hidden">{active ? activeIcon : Icon}</div>
      <p className="hidden lg:block text-lg">{title}</p>
    </Link>
  );
};

export default NavItem;
