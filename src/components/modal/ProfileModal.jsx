"use client";
import { useModal } from "@/hooks/useModal";
import Backdrop from "./shared/Backdrop";
import Container from "./shared/Container";

const ProfileModal = () => {
  const { isOpen, type, setClose } = useModal();
  if (isOpen && type === "profile")
    return (
      <Backdrop
        className="bg-opacity-70 dark:bg-opacity-70"
        setClose={setClose}
        closeOnBackdropMd={true}
        closeOnBackdropSm={true}
      >
        <Container className="absolute z-10 top-0 right-0 min-w-[70%] sm:min-w-[400px] sm:max-w-6/12  md:max-w-4/12 rounded-r-none h-full">
          Profile Modal
        </Container>
      </Backdrop>
    );
};

export default ProfileModal;
