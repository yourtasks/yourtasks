"use client";
import { useModal } from "@/hooks/useModal";
import Avatar from "../shared/Avatar";
import IconButton from "../shared/IconButton";
import Branding from "./Branding";

import { BiSearch } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import SearchBar from "./SearchBar";
import { useState } from "react";

const TopBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { setOpen } = useModal();

  const handleShowSearch = () => {
    setShowSearch(true);
  };

  const handleHideSearch = () => {
    setShowSearch(false);
  };

  return (
    <nav className="sticky top-0 left-0 z-20 w-full flex flex-col items-center card no-select border-b-[1px] border-color">
      <div className="w-full max-w-6xl lg:max-w-[1500px] flex items-center justify-between px-4 py-2">
        <Branding />
        {showSearch && <SearchBar setClose={handleHideSearch} />}
        <div className="flex items-center gap-x-2">
          {!showSearch && (
            <IconButton onClick={handleShowSearch}>
              <BiSearch size={28} />
            </IconButton>
          )}
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
