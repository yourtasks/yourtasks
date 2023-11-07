import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";
import Description from "./Description";
import Deadline from "./Deadline";
import PressToCopy from "../shared/PressToCopy";
import Emergency from "./Emergency";
import Image from "next/image";
import Container from "./Container";
import Vote from "./Vote";
import { useModal } from "@/hooks/useModal";

const Post = ({ data, imageUrl, gradient = false }) => {
  const {
    _id,
    owner,
    type,
    title,
    description,
    createdAt,
    likesCount,
    commentsCount,
    sharesCount,
    options,
    votersCount,
  } = data;

  const isAnnouncement = type === "announcement";
  const isTask = type === "task";
  const isBloodPost = type === "bloodPost";
  const isPost = type === "post";
  const isVote = type === "vote";

  return (
    <Container
      className={
        gradient &&
        type === "bloodPost" &&
        "bg-gradient-to-r from-red-700 dark:from-red-800 dark:to-rose-900 to-rose-800 text-white"
      }
    >
      <div className="px-2">
        <Header
          createdAt={createdAt}
          owner={owner}
          type={type}
          id={_id}
          title={title}
          description={description}
        />
        <PressToCopy>
          {!isPost && <Title title={title} />}
          <Description description={description} />
        </PressToCopy>

        {isBloodPost && <Emergency />}
      </div>
      {imageUrl && (
        <div className="w-full h-[500px] relative">
          <Image src={"/profile.jpg"} alt="alt" fill className="object-cover" />
        </div>
      )}
      {isVote && <Vote options={options} votersCount={votersCount} />}
      {(isTask || isVote) && <Deadline vote={isVote} />}
      <Footer
        likesCount={likesCount}
        commentsCount={commentsCount}
        sharesCount={sharesCount}
        type={type}
        id={_id}
      />
    </Container>
  );
};

export default Post;
