import { BsThreeDots } from "react-icons/bs";
import Avatar from "../shared/Avatar";
import IconButton from "../shared/IconButton";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between no-select">
      <div className="flex items-center gap-x-1">
        <IconButton className="p-1">
          <Avatar className="h-8 w-8" />
        </IconButton>
        <div className="text-sm flex flex-col gap-x-1">
          <h1
            className="font-medium
           px-1 click rounded-sm"
          >
            Md Mofazzal Hossain
          </h1>
          <p className="text-xs opacity-60 font-medium px-1">12 May 2023</p>
        </div>
      </div>
      <IconButton>
        <BsThreeDots size={20} />
      </IconButton>
    </div>
  );
};

export default Header;
