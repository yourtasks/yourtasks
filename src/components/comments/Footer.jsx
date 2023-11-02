"use client";

import React, { useState } from "react";
import FooterItem from "@/components/comments/FooterItem";
import { BiLike, BiSolidLike, BiDislike, BiSolidDislike } from "react-icons/bi";

const Footer = () => {
  const [likesCount, setLikesCount] = useState(12);
  const [dislikesCount, setDislikesCount] = useState(6);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikesCount(dislikesCount - 1);
    }

    if (liked) {
      setLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      setLiked(true);
      setLikesCount(likesCount + 1);
    }
  };

  const handleDislike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount(likesCount - 1);
    }

    if (disliked) {
      setDisliked(false);
      setDislikesCount(dislikesCount - 1);
    } else {
      setDisliked(true);
      setDislikesCount(dislikesCount + 1);
    }
  };

  return (
    <div className="w-full flex justify-end items-center gap-x-4 px-4">
      <FooterItem
        Icon={<BiLike />}
        activeIcon={<BiSolidLike />}
        active={liked}
        count={likesCount}
        onClick={handleLike}
      />
      <FooterItem
        Icon={<BiDislike />}
        activeIcon={<BiSolidDislike />}
        active={disliked}
        count={dislikesCount}
        onClick={handleDislike}
      />
    </div>
  );
};

export default Footer;
