import Avatar from "../shared/Avatar";
import { BsThreeDots } from "react-icons/bs";
import Footer from "./Footer";
import IconButton from "../shared/IconButton";

const Post = ({ type }) => {
  return (
    <div className="w-full card p-2 flex flex-col gap-y-2">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <div>
            <Avatar />
          </div>
          <div className="text-sm flex flex-col gap-x-1">
            <h1 className="font-semibold">Md Mofazzal Hossain</h1>
            <p className="text-xs opacity-60 font-medium">12 May 2023</p>
          </div>
        </div>
        <IconButton>
          <BsThreeDots size={20} />
        </IconButton>
      </div>
      <div className="flex flex-col gap-y-1 px-1">
        {(type === "announcement" || type === "post") && (
          <>
            {type === "announcement" && (
              <h1 className="text-lg font-medium">Title of the posts</h1>
            )}
            <p className="opacity-80">Description of the posts</p>
          </>
        )}
        {type === "task" && (
          <>
            <div className="p-2 flex flex-col rounded-md bg-neutral-500 bg-opacity-30 border-2 border-neutral-500 border-opacity-50">
              <p className="text-xs opacity-60 font-medium">
                CSE 302 - Database
              </p>
              <p className="text-lg font-semibold opacity-90">Task title</p>
              <p className="opacity-80">task description</p>
            </div>
            <p className="py-2 text-lg font-semibold opacity-90">
              Deadline - 12 May 2023 at 5:30 pm
            </p>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Post;
