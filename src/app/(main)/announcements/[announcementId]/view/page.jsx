import Description from "@/components/post/Description";
import Footer from "@/components/post/Footer";
import Header from "@/components/post/Header";
import Title from "@/components/post/Title";
import Container from "@/components/shared/Container";
import PostContainer from "@/components/post/Container";
import PressToCopy from "@/components/shared/PressToCopy";
import Post from "@/components/post/Post";
import Comment from "@/components/comments/Comment";
import CommentList from "@/components/comments/CommentList";

const post = {
  _id: "6542501eb4d1e5f28468f3f9",
  createdAt: "Wed Sep 25 2019 22:00:17 GMT+0600 (Bangladesh Standard Time)",
  type: "announcement",
  owner: {
    firstname: "Camille",
    lastname: "Kane",
  },
  title: "non mollit et ipsum irure amet Lorem",
  description:
    "Labore id consequat dolor velit et id in est Lorem nostrud exercitation aliqua. Veniam qui tempor do occaecat sit minim quis adipisicing elit dolore nulla ut. Laborum quis reprehenderit ut esse fugiat. Ea amet ullamco quis dolore labore enim consectetur. Mollit amet et pariatur et elit cupidatat qui anim consectetur cupidatat. Culpa voluptate elit ipsum velit elit culpa qui fugiat ea sunt. Incididunt ea adipisicing sint ipsum magna reprehenderit sit dolor.",
  likesCount: 854,
  commentsCount: 1831,
  sharesCount: 1738,
};

const page = () => {
  const {
    _id,
    createdAt,
    title,
    description,
    likesCount,
    commentsCount,
    sharesCount,
    owner,
    type,
  } = post;

  return (
    <Container className="flex flex-col gap-y-2 py-2 overflow-y-auto">
      <Post data={post} />
      <CommentList />
    </Container>
  );
};

export default page;
