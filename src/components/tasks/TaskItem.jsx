"use client";

import { TiTick } from "react-icons/ti";
import IconButton from "../shared/IconButton";
import { BsCircle, BsThreeDots } from "react-icons/bs";
import { MdDoneAll, MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";

const TaskItem = ({ completed = false, data, selected, setSelected }) => {
  const [checked, setChecked] = useState(completed);

  const handleClick = () => {
    if (completed) {
      return;
    }
    setChecked((prev) => !prev);

    if (checked) {
      const filteredSelected = selected.filter((item) => item !== data.id);
      setSelected(filteredSelected);
    } else {
      setSelected((prev) => [...prev, data.id]);
    }
  };

  return (
    <div className="w-full flex justify-between no-select">
      <div
        onClick={handleClick}
        className="w-2/12 flex items-center justify-center"
      >
        <div
          className={`p-1 rounded-full text-white transition cursor-pointer ${
            checked ? (completed ? "bg-green-500" : "bg-cyan-500") : "card"
          }`}
        >
          {checked ? (
            <TiTick size={20} />
          ) : (
            <div className="opacity-30">
              <BsCircle size={20} />
            </div>
          )}
        </div>
      </div>
      <div
        onClick={handleClick}
        className={`relative w-full p-2 border-2  rounded-lg transition cursor-pointer ${
          checked
            ? completed
              ? "bg-green-500 bg-opacity-30 border-green-500 border-opacity-50"
              : "bg-cyan-500 bg-opacity-30 border-cyan-500 border-opacity-50"
            : "card border-color"
        }`}
      >
        <p className="text-xs font-medium opacity-60">CSE302 - Database D1</p>
        <h1 className="font-semibold">{data.title}</h1>
        <div className="flex justify-end items-center gap-x-4 opacity-70 text-xs">
          <div className="flex items-center gap-x-2">
            <MdDoneAll size={14} />
            <p>12</p>
          </div>
          <div className="flex items-center gap-x-2">
            <MdRemoveRedEye size={14} />
            <p>25</p>
          </div>
        </div>
      </div>

      <div className="w-2/12 flex items-center justify-center">
        <IconButton>
          <BsThreeDots size={20} />
        </IconButton>
      </div>
    </div>
  );
};

export default TaskItem;
