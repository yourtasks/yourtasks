"use client";
import { useState } from "react";
import VoteOption from "./VoteOption";

const Vote = ({ options, votersCount }) => {
  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    setVoted(true);
  };
  return (
    <div className="px-4 py-2 flex flex-col gap-y-2">
      {options.map((item) => (
        <VoteOption
          key={item._id}
          data={item}
          votersCount={votersCount}
          voted={voted}
          onCLick={handleVote}
        />
      ))}
    </div>
  );
};

export default Vote;
