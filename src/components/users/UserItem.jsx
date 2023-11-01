import { twMerge } from "tailwind-merge";
import Avatar from "../shared/Avatar";

const UserItem = ({ className }) => {
  return (
    <div
      className={twMerge(
        "w-full text-sm flex items-center justify-center gap-x-2 font-semibold click py-2 rounded-md px-2",
        className
      )}
    >
      <div>
        <Avatar />
      </div>
      <h1 className="opacity-80">Md Abu Obayda Zubayed Sayeb Hasan</h1>
    </div>
  );
};

export default UserItem;
