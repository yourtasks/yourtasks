"use client";
import { BiSend, BiSolidSend } from "react-icons/bi";
import Avatar from "../shared/Avatar";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const CommentBar = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("test");
          reset();
        }, 2000);
      });

      console.log(data.comment);
    } catch (error) {}
  };

  return (
    <div className="sticky bottom-0 left-0 w-full p-2 card rounded-lg flex items-center gap-x-2">
      <div>
        <Avatar className="h-10 w-10" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex items-center gap-x-2"
      >
        <input
          disabled={isSubmitting}
          placeholder="Write comment"
          className="input-field rounded-md"
          {...register("comment", { required: true })}
        />
        {isSubmitting ? (
          <div className="px-4 py-2 animate-spin">
            <AiOutlineLoading size={20} />
          </div>
        ) : (
          <button
            className={`px-4 py-2 ${
              isValid ? "bg-cyan" : "text-zinc-500"
            } rounded-md transition`}
          >
            {isValid ? <BiSolidSend size={20} /> : <BiSend size={20} />}
          </button>
        )}
      </form>
    </div>
  );
};

export default CommentBar;
