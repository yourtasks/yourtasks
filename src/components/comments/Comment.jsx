"use client";
import React, { useState } from "react";
import Avatar from "../shared/Avatar";
import IconButton from "../shared/IconButton";
import { BsThreeDotsVertical } from "react-icons/bs";
import Description from "../post/Description";
import Footer from "./Footer";
import moment from "moment";
import { useModal } from "@/hooks/useModal";

const Comment = () => {
  const { setOpen } = useModal();
  const [toggle, setToggle] = useState(false);
  const formattedDate = moment(new Date()).format("DD MMM YY, [at] HH:MM A");
  const timeAgo = moment(new Date()).fromNow();

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleOption = (e) => {
    const rect = e.target.getBoundingClientRect();
    const top = rect.bottom + scrollY;
    const right = Math.abs(rect.x + window.scrollY - window.innerWidth);

    setOpen({ type: "comment-option", data: { position: { top, right } } });
  };

  return (
    <div className="w-full flex gap-x-2 px-4">
      <div>
        <Avatar />
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <h1 className="text-xs font-medium opacity-70">
          Md Mofazzal Hossain
          <span className="opacity-70 px-1 no-select">•</span>
          <span
            onClick={handleToggle}
            className="opacity-70 click rounded-sm no-select"
          >
            {toggle ? formattedDate : timeAgo}
          </span>
        </h1>
        <Description
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, repudiandae consequatur velit dolore explicabo autem exercitationem quidem, laborum, voluptatum est magnam nemo. Quo consequatur quam recusandae temporibus, voluptate tenetur numquam! asdbh as adasdhailsdad a sa dsa dk nkj akjnakj nkajnd"
          }
          className="opacity-90"
        />
        <Footer />
      </div>
      <IconButton onClick={handleOption}>
        <BsThreeDotsVertical size={20} />
      </IconButton>
    </div>
  );
};

export default Comment;
