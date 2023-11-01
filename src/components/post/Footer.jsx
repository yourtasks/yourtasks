"use client";

import React, { useState } from "react";
import FooterItem from "./FooterItem";
import Seperator from "./Seperator";
import { BiCommentDetail, BiLike, BiShare, BiSolidLike } from "react-icons/bi";

const Footer = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  const handleComment = () => {};

  return (
    <div className="w-full flex items-center justify-between gap-x-2">
      <FooterItem
        onClick={handleLike}
        count={15}
        Icon={
          liked ? (
            <div className="text-cyan-500">
              <BiSolidLike size={20} />
            </div>
          ) : (
            <BiLike size={20} />
          )
        }
        className={liked && "opacity-100"}
      />
      <Seperator />
      <FooterItem count={20} Icon={<BiCommentDetail size={20} />} />
      <Seperator />
      <FooterItem count={7} Icon={<BiShare size={20} />} />
    </div>
  );
};

export default Footer;
