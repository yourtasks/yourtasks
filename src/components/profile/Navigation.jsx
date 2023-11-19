"use client";
import { useParams, usePathname } from "next/navigation";
import NavItem from "./NavItem";
import { MdLibraryBooks, MdOutlineLibraryBooks } from "react-icons/md";
import { FaAddressCard, FaRegAddressCard } from "react-icons/fa";
import { MdOutlineGroup, MdGroup } from "react-icons/md";
import { useState } from "react";

const Navigation = () => {
  const [position, setPosition] = useState("0%");
  const path = usePathname();
  const username = useParams().username;

  return (
    <div className="relative pt-4 w-full flex items-center">
      <div className="absolute bottom-0 left-0 w-full">
        <div
          className={`relative left-[${position}] w-1/3 border-b-2 md:border-b-4 border-cyan-500 rounded-md`}
        />
      </div>
      <NavItem
        path={path}
        href={`/u/${username}`}
        Icon={
          <div className="text-[30px] md:text-[30px]">
            <FaRegAddressCard />
          </div>
        }
        activeIcon={
          <div className="text-[30px] md:text-[30px]">
            <FaAddressCard />
          </div>
        }
        title="about"
        onSelect={() => setPosition("0%")}
      />
      <NavItem
        path={path}
        href={`/u/${username}/posts`}
        Icon={
          <div className="text-[30px] md:text-[30px]">
            <MdOutlineLibraryBooks />
          </div>
        }
        activeIcon={
          <div className="text-[30px] md:text-[30px]">
            <MdLibraryBooks />
          </div>
        }
        title="posts"
        onSelect={() => setPosition("33.33%")}
      />
      <NavItem
        path={path}
        href={`/u/${username}/friends`}
        Icon={
          <div className="text-[30px] md:text-[30px]">
            <MdOutlineGroup />
          </div>
        }
        activeIcon={
          <div className="text-[30px] md:text-[30px]">
            <MdGroup />
          </div>
        }
        title="friends"
        onSelect={() => setPosition("66.66%")}
      />
    </div>
  );
};

export default Navigation;
