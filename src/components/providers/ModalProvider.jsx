import Delete from "../modal/Delete";
import PostOption from "../modal/PostOption";
import PostTypeModal from "../modal/PostTypeModal";
import ProfileModal from "../modal/ProfileModal";
import TaskOption from "../modal/TaskOption";

const ModalProvider = () => {
  return (
    <>
      <ProfileModal />
      <PostTypeModal />
      <PostOption />
      <Delete />
      <TaskOption />
    </>
  );
};

export default ModalProvider;
