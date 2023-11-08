"use client";
import { useModal } from "@/hooks/useModal";
import Backdrop from "./shared/Backdrop";
import Container from "./shared/Container";
import OptionList from "./shared/OptionList";
import Avatar from "../shared/Avatar";
import Option from "./shared/Option";
import { BsFillBagFill, BsFillPostcardFill } from "react-icons/bs";
import { BiLogOut, BiSolidDownload, BiSolidHelpCircle } from "react-icons/bi";
import {
  MdAccountBox,
  MdGroup,
  MdModeNight,
  MdOutlineSecurity,
} from "react-icons/md";
import Link from "next/link";

const Seperator = ({ title = "Seperator" }) => {
  return <div className="font-semibold opacity-60 capitalize">{title}</div>;
};

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
            <Link
              href={`/u/username`}
              onClick={setClose}
              className="w-full flex items-center gap-x-2 click no-select p-2 rounded-lg"
            >
              <div>
                <Avatar className="h-14 w-14 sm:h-20 sm:w-20 no-drag" />
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-sm sm:text-md font-semibold">
                  Md Abu Obayda Zubayed Sayeb Sakib Al Hassan
                </h1>
                <p className="text-xs sm:text-sm font-semibold opacity-70">
                  Mofazzal
                </p>
              </div>
            </Link>
            <Seperator title="Your Profile" />
            <Option
              title="Your posts"
              Icon={<BsFillPostcardFill />}
              href={`/u/username/posts`}
              setClose={setClose}
            />
            <Option title="Friends" Icon={<MdGroup />} />
            <Seperator title="Account & Settings" />
            <Option title="Account" Icon={<MdAccountBox />} />
            <Option title="Security" Icon={<MdOutlineSecurity />} />
            <Option title="Help" Icon={<BiSolidHelpCircle />} />
            <Option title="Terms of Service" Icon={<BsFillBagFill />} />
            <Option title="Dark Mode" Icon={<MdModeNight />} />
            <Seperator title="Share" />
            <Option title="Download App" Icon={<BiSolidDownload />} />
            <Option
              title="Log out"
              Icon={<BiLogOut />}
              href={`/login`}
              className="bg-rose-500 bg-opacity-10 text-rose-500 border-2 border-rose-500 border-opacity-50 font-semibold"
            />
          </OptionList>
        </Container>
      </Backdrop>
    );
};

export default ProfileModal;
