"use client";
import { BiSolidBookAdd } from "react-icons/bi";
import Backdrop from "./shared/Backdrop";
import Close from "./shared/Close";
import Container from "./shared/Container";
import Option from "./shared/Option";
import OptionList from "./shared/OptionList";
import { MdCampaign, MdHowToVote, MdTask } from "react-icons/md";
import { useModal } from "@/hooks/useModal";

const PostTypeModal = () => {
  const { setClose, isOpen, type } = useModal();

  if (isOpen && type === "post-type") {
    return (
      <Backdrop
        className="bg-opacity-70 dark:bg-opacity-70"
        setClose={setClose}
        closeOnBackdropSm={true}
      >
        <Container className="w-full sm:max-w-[520px] rounded-b-none sm:rounded-b-lg sm:justify-center no-select border-2 border-color">
          <Close onClick={setClose} />
          <h1 className="w-full text-center text-lg sm:text-2xl fon-semibold opacity-70 capitalize">
            Type of creation
          </h1>
          <OptionList className="pt-4">
            <Option
              Icon={
                <div className="text-[20px] sm:text-[30px]">
                  <BiSolidBookAdd />
                </div>
              }
              title="Course"
              className="sm:text-xl"
              outlined={true}
            />
            <Option
              Icon={
                <div className="text-[20px] sm:text-[30px]">
                  <MdCampaign />
                </div>
              }
              title="announcement"
              className="sm:text-xl"
              outlined={true}
            />
            <Option
              Icon={
                <div className="text-[20px] sm:text-[30px]">
                  <MdTask />
                </div>
              }
              title="task"
              className="sm:text-xl"
              outlined={true}
            />
            <Option
              Icon={
                <div className="text-[20px] sm:text-[30px]">
                  <MdHowToVote />
                </div>
              }
              title="vote"
              className="sm:text-xl"
              outlined={true}
            />
          </OptionList>
        </Container>
      </Backdrop>
    );
  }
};

export default PostTypeModal;
