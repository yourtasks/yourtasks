import React from "react";
import FooterItem from "./FooterItem";
import Seperator from "./Seperator";
import { BiCommentDetail, BiLike, BiShare } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-between gap-x-2">
      <FooterItem count={15} Icon={<BiLike size={20} />} />
      <Seperator />
      <FooterItem count={20} Icon={<BiCommentDetail size={20} />} />
      <Seperator />
      <FooterItem count={7} Icon={<BiShare size={20} />} />
    </div>
  );
};

export default Footer;
