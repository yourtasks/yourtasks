"use client";
import { useModal } from "@/hooks/useModal";
import Backdrop from "./shared/Backdrop";
import Container from "./shared/Container";
import OptionList from "./shared/OptionList";
import Avatar from "../shared/Avatar";
import Option from "./shared/Option";
import { BsPostcard } from "react-icons/bs";

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
        <Container className="absolute z-10 top-0 right-0 w-[70%] sm:w-[400px] sm:max-w-6/12  md:max-w-4/12 rounded-r-none h-full">
          <OptionList className="gap-y-2">
            <div className="w-full flex items-center gap-x-2 click no-select p-2 rounded-lg">
              <div>
                <Avatar className="h-20 w-20 no-drag" />
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="font-semibold">
                  Md Abu Obayda Zubayed Sayeb Sakib Al Hassan
                </h1>
                <p className="text-sm font-semibold opacity-70">Mofazzal</p>
              </div>
            </div>
            <Option title="Your posts" Icon={<BsPostcard size={20} />} />
          </OptionList>
        </Container>
      </Backdrop>
    );
};

export default ProfileModal;
