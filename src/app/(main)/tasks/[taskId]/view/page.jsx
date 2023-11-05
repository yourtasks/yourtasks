import Post from "@/components/post/Post";
import Container from "@/components/shared/Container";
const task = {
  _id: "6542501eb4d1e5f28468f3f9",
  createdAt: "Wed Sep 25 2019 22:00:17 GMT+0600 (Bangladesh Standard Time)",
  type: "task",
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
  return (
    <Container className="sm:py-4">
      <Post data={task} />
    </Container>
  );
};

export default page;
