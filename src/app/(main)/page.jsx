import Post from "@/components/post/Post";
import Container from "@/components/shared/Container";

const Page = () => {
  return (
    <Container>
      <Post type="announcement" />
      <Post type="announcement" />
      <Post type="task" />
      <Post type="announcement" />
      <Post type="task" />
      <Post type="post" />
      <Post type="post" />
      <Post type="task" />
      <Post type="post" />
      <Post type="post" />
      <Post type="task" />
      <Post type="post" />
      <Post type="post" />
    </Container>
  );
};

export default Page;
