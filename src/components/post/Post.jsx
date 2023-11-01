import Avatar from "../shared/Avatar";
import { BsThreeDots } from "react-icons/bs";
import Footer from "./Footer";
import IconButton from "../shared/IconButton";
import Header from "./Header";
import Title from "./Title";
import Description from "./Description";
import TaskCard from "./TaskCard";
import PressToCopy from "../shared/PressToCopy";
import Emergency from "./Emergency";

const Post = ({ type }) => {
  return (
    <div
      className={`w-full p-2 flex flex-col gap-y-2 ${
        type === "bloodPost"
          ? "bg-gradient-to-r from-red-800 to-rose-900"
          : "card"
      }`}
    >
      <Header />
      <PressToCopy>
        {(type === "announcement" ||
          type === "post" ||
          type == "bloodPost") && (
          <>
            {(type === "announcement" || type === "bloodPost") && <Title />}
            <Description />
          </>
        )}
      </PressToCopy>
      {type === "task" && <TaskCard />}
      {type === "bloodPost" && <Emergency />}
      <Footer />
    </div>
  );
};

export default Post;
