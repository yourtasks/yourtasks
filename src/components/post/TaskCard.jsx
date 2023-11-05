"use client";
import moment from "moment";
import { useState } from "react";

const TaskCard = () => {
  const [toggle, setToggle] = useState(false);
  const deadline = new Date();

  const formattedDate = moment().format("DD MMM YY, [at] HH:MM A");
  const timeAgo = moment(deadline).fromNow();

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={handleToggle}
        className="mx-4 my-2 py-2 text-lg font-semibold opacity-90 border-2 border-color  border-dashed flex flex-col items-center justify-center rounded-lg click"
      >
        <p className="text-lg font-semibold opacity-70 tracking-widest uppercase">
          Deadline
        </p>
        <p>{toggle ? timeAgo : formattedDate}</p>
      </div>
    </>
  );
};

export default TaskCard;
