"use client";
import { BsThreeDots } from "react-icons/bs";
import Avatar from "../shared/Avatar";
import IconButton from "../shared/IconButton";
import moment from "moment/moment";
import Link from "next/link";
import { useModal } from "@/hooks/useModal";

const Header = ({ createdAt, owner, id, type, title, description }) => {
  const { setOpen } = useModal();
  const { firstname, lastname } = owner;

  const handleShowOption = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = Math.abs(rect.x + window.scrollY - window.innerWidth);
    const y = rect.bottom + scrollY;

    setOpen({
      type: "post-option",
      data: {
        type,
        id,
        position: { top: y, right: x },
        title,
        description,
      },
    });
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
      <IconButton onClick={handleShowOption}>
        <BsThreeDots size={20} />
      </IconButton>
    </div>
  );
};

export default Header;
