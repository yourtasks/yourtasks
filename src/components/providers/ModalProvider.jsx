import Delete from "../modal/Delete";
import PostOption from "../modal/PostOption";
import PostTypeModal from "../modal/PostTypeModal";
import ProfileModal from "../modal/ProfileModal";

const ModalProvider = () => {
  return (
    <>
      <ProfileModal />
      <PostTypeModal />
      <PostOption />
      <Delete />
    </>
  );
};

export default ModalProvider;
