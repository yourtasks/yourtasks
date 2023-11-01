import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";
import Description from "./Description";
import TaskCard from "./TaskCard";
import PressToCopy from "../shared/PressToCopy";
import Emergency from "./Emergency";
import Image from "next/image";

const Post = ({ data, imageUrl }) => {
  const {
    owner,
    type,
    title,
    description,
    createdAt,
    likesCount,
    commentsCount,
    sharesCount,
  } = data;

  return (
    <div
      className={`sm:rounded-lg w-full py-2 flex flex-col gap-y-2 ${
        type === "bloodPost"
          ? "bg-gradient-to-r from-red-700 dark:from-red-800 dark:to-rose-900 to-rose-800 text-white"
          : "card"
      }`}
    >
      <div className="px-2">
        <Header createdAt={createdAt} owner={owner} />
        <PressToCopy>
          {(type === "announcement" ||
            type === "post" ||
            type == "bloodPost") && (
            <>
              {(type === "announcement" || type === "bloodPost") && (
                <Title title={title} />
              )}
              <Description description={description} />
            </>
          )}
        </PressToCopy>

        {type === "task" && <TaskCard />}
        {type === "bloodPost" && <Emergency />}
      </div>
      {imageUrl && (
        <div className="w-full h-[500px] relative">
          <Image src={"/profile.jpg"} alt="alt" fill className="object-cover" />
        </div>
      )}
      <Footer
        likesCount={likesCount}
        commentsCount={commentsCount}
        sharesCount={sharesCount}
      />
    </div>
  );
};

export default Post;
