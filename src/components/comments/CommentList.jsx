import Comment from "./Comment";

const CommentList = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 card py-4 round">
      <h1 className="text-lg px-4 font-semibold opacity-60">Comments</h1>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentList;
