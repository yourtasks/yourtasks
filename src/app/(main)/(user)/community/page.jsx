import CreatePostCard from "@/components/community/CreatePostCard";
import { communityPost } from "@/data/communityPost";
import Post from "@/components/post/Post";
import Container from "@/components/shared/Container";

const page = () => {
  return (
    <Container className="h-full pb-[150px] sm:py-4 flex flex-col gap-y-2">
      <CreatePostCard />
      {communityPost.map((post) => (
        <Post key={post._id} data={post} />
      ))}
    </Container>
  );
};

export default page;
