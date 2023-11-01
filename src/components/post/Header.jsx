import { BsThreeDots } from "react-icons/bs";
import Avatar from "../shared/Avatar";
import IconButton from "../shared/IconButton";
import moment from "moment/moment";

const Header = ({ createdAt, owner }) => {
  const { firstname, lastname } = owner;
  const timeAgo = moment(createdAt).fromNow();

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
            {`${firstname} ${lastname}`}
          </h1>
          <p className="text-xs opacity-60 font-medium px-1">{timeAgo}</p>
        </div>
      </div>
      <IconButton>
        <BsThreeDots size={20} />
      </IconButton>
    </div>
  );
};

export default Header;
