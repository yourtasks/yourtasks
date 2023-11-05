"use client";

import React, { useState } from "react";
import FooterItem from "./FooterItem";
import Seperator from "./Seperator";
import { BiCommentDetail, BiLike, BiShare, BiSolidLike } from "react-icons/bi";
import Link from "next/link";
import { getSinglePostURL } from "./getSinglePostURL";

const Footer = ({
  likesCount: Lcount,
  commentsCount,
  sharesCount,
  type,
  id,
}) => {
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
      <Link
        href={getSinglePostURL({ type, id, extension: "view" })}
        className="w-full"
      >
        <FooterItem
          count={commentsCount}
          Icon={<BiCommentDetail size={20} />}
        />
      </Link>
      <Seperator />
      <FooterItem count={sharesCount} Icon={<BiShare size={20} />} />
    </div>
  );
};

export default Footer;
