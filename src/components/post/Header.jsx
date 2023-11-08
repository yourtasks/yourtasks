"use client";
import { BsThreeDots } from "react-icons/bs";
import Avatar from "../shared/Avatar";
import IconButton from "../shared/IconButton";
import Link from "next/link";
import PostOption from "../modal/PostOption";
import { useState } from "react";

const Header = ({ createdAt, owner, id, type, title, description }) => {
  const { firstname, lastname } = owner;
  const [showOption, setShowOption] = useState(false);

  const handleShowOption = (e) => {
    setShowOption(true);
  };

  const handleHideOption = () => {
    setShowOption(false);
  };

  return (
    <div className="w-full flex items-center justify-between no-select">
      <div className="flex items-center gap-x-1">
        <IconButton href={`/u/mdmofazzal`} className="p-1">
          <Avatar className="h-8 w-8" />
        </IconButton>
        <div className="text-sm flex flex-col gap-x-1">
          <Link
            href={`/u/mdmofazzal`}
            className="font-medium
           px-1 click rounded-sm w-fit"
          >
            {`${firstname} ${lastname}`}
          </Link>
          <p className="text-xs opacity-60 font-medium px-1">{createdAt}</p>
        </div>
      </div>
      <IconButton onClick={handleShowOption} className="relative">
        <BsThreeDots size={20} />
        {showOption && (
          <PostOption
            setClose={handleHideOption}
            data={{ title, description, type, id }}
          />
        )}
      </IconButton>
    </div>
  );
};

export default Header;
