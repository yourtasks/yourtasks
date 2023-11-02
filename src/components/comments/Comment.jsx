import React from "react";
import Avatar from "../shared/Avatar";
import IconButton from "../shared/IconButton";
import { BsThreeDotsVertical } from "react-icons/bs";
import Description from "../post/Description";
import Footer from "./Footer";

const Comment = () => {
  return (
    <div className="w-full flex gap-x-2 px-4">
      <div>
        <Avatar />
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <h1 className="text-xs font-medium opacity-70">Md Mofazzal Hossain</h1>
        <Description
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, repudiandae consequatur velit dolore explicabo autem exercitationem quidem, laborum, voluptatum est magnam nemo. Quo consequatur quam recusandae temporibus, voluptate tenetur numquam! asdbh as adasdhailsdad a sa dsa dk nkj akjnakj nkajnd"
          }
          className="opacity-90"
        />
        <Footer />
      </div>
      <IconButton>
        <BsThreeDotsVertical size={20} />
      </IconButton>
    </div>
  );
};

export default Comment;
