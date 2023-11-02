export const getSinglePostURL = ({ type, id }) => {
  const isAnnouncement = type === "announcement";
  const isTask = type === "task";
  const isBloodPost = type === "bloodPost";
  const isPost = type === "post";
  const isVote = type === "vote";

  const block = isPost
    ? "community"
    : isBloodPost
    ? "blood-emergency"
    : isAnnouncement
    ? "announcements"
    : isTask
    ? "tasks"
    : isVote && "votes";

  return `/${block}/${id}/view`;
};
