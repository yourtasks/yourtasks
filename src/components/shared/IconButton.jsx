import Link from "next/link";
import { twMerge } from "tailwind-merge";

const IconButton = ({ children, className, href, onClick }) => {
  const baseStyle = twMerge("w-fit h-fit p-2 rounded-full click", className);

  if (href) {
    return (
      <Link href={href} className={baseStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyle}>
      {children}
    </button>
  );
};

export default IconButton;
