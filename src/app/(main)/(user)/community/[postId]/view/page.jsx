import CommentBar from "@/components/comments/CommentBar";
import CommentList from "@/components/comments/CommentList";
import Post from "@/components/post/Post";
import Container from "@/components/shared/Container";

const post = {
  _id: "65424f06402152205402e63e",
  createdAt: "Sun Sep 24 2023 09:50:01 GMT+0600 (Bangladesh Standard Time)",
  type: "post",
  owner: {
    firstname: "Jimmie",
    lastname: "Carey",
  },
  description:
    "Culpa aliquip ad dolore est pariatur laborum dolor ullamco consequat duis fugiat tempor do elit. Fugiat commodo occaecat elit quis ad. Eu pariatur amet cillum esse ex minim reprehenderit aliqua non commodo labore.",
  likesCount: 505,
  commentsCount: 1742,
  sharesCount: 1787,
};

const page = () => {
  return (
    <Container className="md:py-4">
      <Post data={post} />
      <CommentList />
      <CommentBar />
    </Container>
  );
};

export default page;
