"use client";

import React, { useState } from "react";
import FooterItem from "./FooterItem";
import Seperator from "./Seperator";
import { BiCommentDetail, BiLike, BiShare, BiSolidLike } from "react-icons/bi";

const Footer = ({ likesCount: Lcount, commentsCount, sharesCount }) => {
  const [likesCount, setLikesCount] = useState(Lcount);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikesCount(Lcount);
    } else {
      setLikesCount(Lcount + 1);
    }
    setLiked((prev) => !prev);
  };

  const handleComment = () => {};

  return (
    <div className="w-full flex items-center justify-between gap-x-2 px-2">
      <FooterItem
        onClick={handleLike}
        count={likesCount}
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
      <FooterItem count={commentsCount} Icon={<BiCommentDetail size={20} />} />
      <Seperator />
      <FooterItem count={sharesCount} Icon={<BiShare size={20} />} />
    </div>
  );
};

export default Footer;
