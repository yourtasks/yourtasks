"use client";
import Image from "next/image";

const VoteOption = ({ data, votersCount = 120, voted, onCLick }) => {
  const { votesCount, title } = data;
  const avgVotes = Math.floor((votesCount / votersCount) * 100);

  return (
    <div
      className={`relative w-full flex items-center rounded-md border-2 overflow-hidden ${
        voted ? "border-cyan-500" : "border-color"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full  bg-opacity-30 ${
          voted ? "bg-cyan-500" : "invert-bg bg-opacity-10 dark:bg-opacity-10"
        }`}
      />
      <div className="relative h-[80px] w-[120px] sm:w-[150px] sm:h-[100px] z-30">
        <Image src={"/profile.jpg"} alt="alt" fill className="object-cover" />
      </div>
      <div
        onClick={onCLick}
        className="relative w-full h-full flex items-center justify-between px-4 no-select cursor-pointer"
      >
        <div
          className={`absolute top-0 left-0 h-full bg-opacity-30 transition ${
            voted && "  bg-cyan-500"
          }`}
          style={{ width: `${avgVotes}%` }}
        />
        <p className="text-lg font-semibold relative z-10">{title}</p>
        {voted && <p className="font-semibold text-center">{`${avgVotes}%`}</p>}
      </div>
    </div>
  );
};

export default VoteOption;
