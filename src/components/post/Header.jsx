import { BsThreeDots } from "react-icons/bs";
import Avatar from "../shared/Avatar";
import IconButton from "../shared/IconButton";
import moment from "moment/moment";
import Link from "next/link";

const Header = ({ createdAt, owner }) => {
  const { firstname, lastname } = owner;

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
      <IconButton>
        <BsThreeDots size={20} />
      </IconButton>
    </div>
  );
};

export default Header;
