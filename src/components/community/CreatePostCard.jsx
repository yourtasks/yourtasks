import { BiSolidImageAdd } from "react-icons/bi";
import Avatar from "../shared/Avatar";
import Link from "next/link";

const CreatePostCard = () => {
  return (
    <Link
      href={`/community/post/new`}
      className="w-full card p-4 flex items-center justify-between gap-x-2 sm:rounded-lg"
    >
      <div>
        <Avatar className="h-9 w-9" />
      </div>
      <p className="py-2 px-4 invert-bg bg-opacity-10 dark:bg-opacity-10 rounded-md w-full opacity-60">
        What{"'"}s on your mind?
      </p>
      <div className="opacity-70">
        <BiSolidImageAdd size={30} />
      </div>
    </Link>
  );
};

export default CreatePostCard;
