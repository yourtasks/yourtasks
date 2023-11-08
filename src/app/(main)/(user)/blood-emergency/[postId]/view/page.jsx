import CommentList from "@/components/comments/CommentList";
import Post from "@/components/post/Post";
import Container from "@/components/shared/Container";

const post = {
  _id: "6542501e90a7d19507170588",
  createdAt: "Wed Nov 20 2019 08:14:20 GMT+0600 (Bangladesh Standard Time)",
  type: "bloodPost",
  owner: {
    firstname: "Long",
    lastname: "Adams",
  },
  title: "qui ut fugiat nisi adipisicing labore elit",
  description:
    "Esse deserunt qui nostrud sunt dolor ea. Sint velit amet ea dolor esse adipisicing aliqua officia cupidatat officia nisi. Velit deserunt aliqua nulla veniam. Elit velit et veniam mollit elit eiusmod excepteur quis consequat. Quis occaecat id culpa culpa ea ullamco magna et ut irure qui veniam.",
  likesCount: 465,
  commentsCount: 97,
  sharesCount: 128,
};

const Page = () => {
  return (
    <Container className="md:py-4">
      <Post data={post} />
      <CommentList />
    </Container>
  );
};

export default Page;
