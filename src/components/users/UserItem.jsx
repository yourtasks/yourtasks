import { twMerge } from "tailwind-merge";
import Avatar from "../shared/Avatar";
import Link from "next/link";

const UserItem = ({ className }) => {
  return (
    <Link
      href={`/u/sayeb`}
      className={twMerge(
        "w-full text-sm flex items-center justify-center gap-x-2 font-semibold click py-2 rounded-md px-2",
        className
      )}
    >
      <div>
        <Avatar />
      </div>
      <h1 className="opacity-80">Md Abu Obayda Zubayed Sayeb Hasan</h1>
    </Link>
  );
};

export default UserItem;
