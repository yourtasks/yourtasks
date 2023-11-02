import PostTypeModal from "../modal/PostTypeModal";
import ProfileModal from "../modal/ProfileModal";

const ModalProvider = () => {
  return (
    <>
      <ProfileModal />
      <PostTypeModal />
    </>
  );
};

export default ModalProvider;
