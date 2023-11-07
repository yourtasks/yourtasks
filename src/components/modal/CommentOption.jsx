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
import { getSinglePostURL } from "../post/getSinglePostURL";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const CommentOption = () => {
  const { isOpen, type, setClose, setOpen, data } = useModal();
  const [report, setReport] = useState(false);
  const optionStyle = "text-sm font-semibold opacity-90";

  useEffect(() => {
    setReport(false);
  }, [isOpen]);

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

  if (isOpen && type === "comment-option")
    return (
      <Backdrop
        className="bg-opacity-0"
        setClose={setClose}
        closeOnBackdropMd={true}
        closeOnBackdropSm={true}
      >
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
                  href={getSinglePostURL({
                    type: data.type,
                    id: data.id,
                    extension: "edit",
                  })}
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
      </Backdrop>
    );
};

export default CommentOption;
