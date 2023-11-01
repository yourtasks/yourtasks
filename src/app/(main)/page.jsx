import { postData } from "@/components/data/postData";
import Post from "@/components/post/Post";
import Container from "@/components/shared/Container";

const Page = () => {
  return (
    <Container>
      {postData.map((post) => (
        <Post key={post._id} data={post} />
      ))}
    </Container>
  );
};

export default Page;
