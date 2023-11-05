"use client";
import { useModal } from "@/hooks/useModal";
import Avatar from "../shared/Avatar";
import IconButton from "../shared/IconButton";
import Branding from "./Branding";

import { BiSearch } from "react-icons/bi";
import { MdAdd } from "react-icons/md";

const TopBar = () => {
  const { setOpen } = useModal();

  return (
    <nav className="sticky top-0 left-0 z-20 w-full flex flex-col items-center card no-select border-b-[1px] border-color">
      <div className="w-full max-w-6xl flex items-center justify-between px-4 py-2">
        <Branding />
        <div className="flex items-center gap-x-2">
          <IconButton>
            <BiSearch size={28} />
          </IconButton>
          <IconButton onClick={() => setOpen({ type: "post-type" })}>
            <MdAdd size={28} />
          </IconButton>
          <IconButton onClick={() => setOpen({ type: "profile" })}>
            <Avatar />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
