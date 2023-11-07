import CommentList from "@/components/comments/CommentList";
import Post from "@/components/post/Post";
import Container from "@/components/shared/Container";

const vote = {
  _id: "6542501e31e6c5e382704a1a",
  createdAt: "Thu Jan 12 2023 03:14:27 GMT+0600 (Bangladesh Standard Time)",
  type: "vote",
  owner: {
    firstname: "Kathrine",
    lastname: "Knight",
  },
  title: "eu ex excepteur nostrud est sint officia",
  description:
    "Culpa ea exercitation esse enim cupidatat laborum do anim. Sit proident Lorem adipisicing anim ex ut labore laboris dolor. Velit amet proident in nisi ipsum elit anim mollit cillum fugiat. Proident consequat proident ex et cupidatat reprehenderit reprehenderit officia reprehenderit non. Voluptate Lorem velit irure esse ut veniam laboris mollit velit id. Mollit veniam Lorem nulla pariatur do elit nostrud. Nostrud reprehenderit minim eiusmod incididunt.",
  options: [
    {
      _id: "a45sdasda4sd5s4d",
      title: "Md Mofazzal Hossain",
      votesCount: 15,
    },
    {
      _id: "a45sdasda4sd5s4d",
      title: "Md Abu Obayda Zubayed Sayeb",
      votesCount: 30,
    },
    {
      _id: "a45sdasda4sd5s4d",
      title: "Md Sabbir Hasan",
      votesCount: 45,
    },
  ],
  votersCount: 120,
  likesCount: 519,
  commentsCount: 968,
  sharesCount: 480,
};

const page = () => {
  return (
    <Container>
      <Post data={vote} />
      <Post data={vote} />
      <Post data={vote} />
      <Post data={vote} />
    </Container>
  );
};

export default page;
