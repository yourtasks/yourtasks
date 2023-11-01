"use client";

import { useState } from "react";

const Description = ({ description }) => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore((prev) => !prev);
  };

  return (
    <p
      onClick={handleMore}
      className={`text-sm opacity-80 ${!more && "line-clamp-5"}`}
    >
      {description}
    </p>
  );
};

export default Description;
