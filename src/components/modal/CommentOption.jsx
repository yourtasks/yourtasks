"use client";
import { useModal } from "@/hooks/useModal";
import Backdrop from "./shared/Backdrop";
import PositionContainer from "./shared/PositionContainer";
import OptionList from "./shared/OptionList";
import Option from "./shared/Option";
import {
  BiArrowBack,
  BiCopy,
  BiFlag,
  BiHide,
  BiLinkAlt,
  BiPencil,
  BiTrash,
} from "react-icons/bi";
import { useEffect, useState } from "react";

const CommentOption = ({ data, setClose }) => {
  const { setOpen } = useModal();
  const { comment, id } = data;
  const [report, setReport] = useState(false);
  const optionStyle = "text-sm font-semibold opacity-90";

  useEffect(() => {
    setReport(false);
  }, []);

  const handleDelete = () => {
    setOpen({ type: "delete-post", data: { item: "post" } });
    setClose();
  };

  return (
    <>
      <Backdrop
        className="bg-opacity-30"
        setClose={setClose}
        closeOnBackdropMd={true}
        closeOnBackdropSm={true}
      />
      <PositionContainer>
        <OptionList className="gap-y-1">
          {report ? (
            <>
              <Option
                Icon={<BiArrowBack size={20} />}
                className={optionStyle}
                onClick={() => setReport(false)}
              />
              <Option
                title="Duplicate post"
                Icon={<BiCopy size={20} />}
                className={optionStyle}
                onClick={handleCopyText}
              />
            </>
          ) : (
            <>
              <Option
                title="Edit"
                Icon={<BiPencil size={20} />}
                className={optionStyle}
                href={``}
              />
              <Option
                onClick={handleDelete}
                title="delete"
                Icon={<BiTrash size={20} />}
                className={
                  optionStyle +
                  " text-rose-500 bg-rose-500 bg-opacity-0 sm:bg-opacity-5 sm:border-[1px] border-rose-500"
                }
              />
              <Option
                title="report this comment"
                Icon={<BiFlag size={20} />}
                className={optionStyle}
                onClick={() => setReport(true)}
              />
            </>
          )}
        </OptionList>
      </PositionContainer>
    </>
  );
};

export default CommentOption;
