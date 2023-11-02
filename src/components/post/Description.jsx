"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Description = ({ description, className }) => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore((prev) => !prev);
  };

  return (
    <p
      onClick={handleMore}
      className={twMerge(
        `text-sm opacity-80 ${!more && "line-clamp-5"}`,
        className
      )}
    >
      {description}
    </p>
  );
};

export default Description;
