"use client";
import React, { useState } from "react";
import Avatar from "../shared/Avatar";
import IconButton from "../shared/IconButton";
import { BsThreeDotsVertical } from "react-icons/bs";
import Description from "../post/Description";
import Footer from "./Footer";
import moment from "moment";
import { useModal } from "@/hooks/useModal";
import CommentOption from "../modal/CommentOption";

const Comment = () => {
  const [showOption, setShowOption] = useState(false);
  const [toggle, setToggle] = useState(false);
  const formattedDate = moment(new Date()).format("DD MMM YY, [at] HH:MM A");
  const timeAgo = moment(new Date()).fromNow();

  console.log(showOption);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleShowOption = () => {
    setShowOption(true);
  };

  const handleHideOption = () => {
    setShowOption(false);
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
      <IconButton onClick={handleShowOption} className="relative">
        <BsThreeDotsVertical size={20} />
        {showOption && <CommentOption setClose={handleHideOption} data={{}} />}
      </IconButton>
    </div>
  );
};

export default Comment;
