"use client";
import { useModal } from "@/hooks/useModal";
import Backdrop from "./shared/Backdrop";
import PositionContainer from "./shared/PositionContainer";
import OptionList from "./shared/OptionList";
import Option from "./shared/Option";
import { GrTextAlignFull } from "react-icons/gr";
import {
  BiArrowBack,
  BiCopy,
  BiFlag,
  BiHide,
  BiLinkAlt,
  BiPencil,
  BiTrash,
} from "react-icons/bi";
import { getSinglePostURL } from "../post/getSinglePostURL";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const TaskOption = ({ setClose, data }) => {
  const { title, description, deadline, id } = data;
  const [report, setReport] = useState(false);
  const { setOpen } = useModal();
  const optionStyle = "text-sm font-semibold opacity-90";

  useEffect(() => {
    setReport(false);
  }, []);

  const handleCopyText = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${data.title}\n\n${data.description}`);
      toast("Text copied");
    } else {
      toast.error("Couldn't copy text");
    }
    setClose();
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_SITE_URL}/${getSinglePostURL({
          type: data.type,
          id: data.id,
          extension: "view",
        })}`
      );
      toast("Link copied");
    } else {
      toast.error("Try again");
    }
    setClose();
  };

  const handleDelete = () => {
    setOpen({ type: "delete-post", data: { item: "post" } });
  };

  return (
    <>
      <Backdrop
        className="bg-opacity-50"
        setClose={setClose}
        closeOnBackdropMd={true}
        closeOnBackdropSm={true}
      />
      <PositionContainer>
        <OptionList>
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
                title="Show full post"
                Icon={<GrTextAlignFull size={20} />}
                className={optionStyle}
                href={`/tasks/${id}/view`}
              />
              <Option
                title="copy text"
                Icon={<BiCopy size={20} />}
                className={optionStyle}
                onClick={handleCopyText}
              />
              <Option
                title="Edit post"
                Icon={<BiPencil size={20} />}
                className={optionStyle}
                href={getSinglePostURL({
                  type: data.type,
                  id: data.id,
                  extension: "edit",
                })}
              />
              <Option
                title="Copy link to clipboard"
                Icon={<BiLinkAlt size={20} />}
                className={optionStyle}
                onClick={handleCopyLink}
              />
              <Option
                onClick={handleDelete}
                title="delete post"
                Icon={<BiTrash size={20} />}
                className={
                  optionStyle +
                  " text-rose-500 bg-rose-500 bg-opacity-0 sm:bg-opacity-5 sm:border-[1px] border-rose-500"
                }
              />
              <Option
                title="report post"
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

export default TaskOption;
