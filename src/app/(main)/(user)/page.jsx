import { postData } from "@/data/postData";
import Post from "@/components/post/Post";
import Container from "@/components/shared/Container";

const Page = () => {
  return (
    <Container className="md:py-4">
      {postData.map((post) => (
        <Post key={post._id} data={post} gradient={true} />
      ))}
    </Container>
  );
};

export default Page;
