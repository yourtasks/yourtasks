"use client";
import { useModal } from "@/hooks/useModal";
import Backdrop from "./shared/Backdrop";
import PositionContainer from "./shared/PositionContainer";
import OptionList from "./shared/OptionList";
import Option from "./shared/Option";
import { GrTextAlignFull } from "react-icons/gr";

const TaskOption = () => {
  const { isOpen, type, data, setClose } = useModal();

  if (isOpen && type === "task-option")
    return (
      <Backdrop
        closeOnBackdropMd={true}
        closeOnBackdropSm={true}
        className="bg-transparent"
        setClose={setClose}
      >
        <PositionContainer>
          <OptionList>
            <Option title="Show full post" Icon={<GrTextAlignFull />} />
          </OptionList>
        </PositionContainer>
      </Backdrop>
    );
};

export default TaskOption;
