import { BiSolidImageAdd } from "react-icons/bi";
import Avatar from "../shared/Avatar";

const CreatePostCard = () => {
  return (
    <div className="w-full card p-4 flex items-center justify-between gap-x-2 sm:rounded-lg">
      <div>
        <Avatar className="h-9 w-9" />
      </div>
      <p className="py-2 px-4 invert-bg bg-opacity-10 dark:bg-opacity-10 rounded-md w-full">
        What{"'"}s on your mind?
      </p>
      <div className="opacity-70">
        <BiSolidImageAdd size={30} />
      </div>
    </div>
  );
};

export default CreatePostCard;
