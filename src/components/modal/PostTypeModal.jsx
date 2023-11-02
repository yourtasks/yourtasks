import { BiBookAlt, BiSolidBookAdd } from "react-icons/bi";
import Backdrop from "./shared/Backdrop";
import Close from "./shared/Close";
import Container from "./shared/Container";
import Header from "./shared/Header";
import Option from "./shared/Option";
import OptionList from "./shared/OptionList";
import { MdCampaign, MdHowToVote, MdTask } from "react-icons/md";

const PostTypeModal = () => {
  return (
    <Backdrop className="bg-opacity-70 dark:bg-opacity-70">
      <Container className="w-full sm:max-w-[520px] rounded-b-none sm:rounded-b-lg sm:justify-center no-select">
        <Close />
        <h1 className="w-full text-center text-2xl fon-semibold opacity-70 capitalize">
          Type of creation
        </h1>
        <OptionList className="pt-4">
          <Option
            Icon={<BiSolidBookAdd size={30} />}
            title="Course"
            className="text-xl"
            outlined={true}
          />
          <Option
            Icon={<MdCampaign size={30} />}
            title="announcement"
            className="text-xl"
            outlined={true}
          />
          <Option
            Icon={<MdTask size={30} />}
            title="task"
            className="text-xl"
            outlined={true}
          />
          <Option
            Icon={<MdHowToVote size={30} />}
            title="vote"
            className="text-xl"
            outlined={true}
          />
        </OptionList>
      </Container>
    </Backdrop>
  );
};

export default PostTypeModal;
