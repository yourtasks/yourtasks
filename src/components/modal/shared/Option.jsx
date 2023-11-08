import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Option = ({
  className,
  title,
  Icon,
  outlined = false,
  onClick,
  href,
  setClose,
}) => {
  const style = twMerge(
    `p-4 flex items-center gap-x-2 click rounded-lg transition text-sm sm:text-lg font-medium ${
      outlined &&
      "border-2 border-zinc-200 dark:border-zinc-700 active:border-zinc-300 dark:active:border-zinc-600"
    }`,
    className
  );

  if (href) {
    return (
      <Link href={href} onClick={setClose} className={style}>
        {Icon && <div className="text-[20px] sm:text-[30px]">{Icon}</div>}
        <p className="capitalize">{title}</p>
      </Link>
    );
  }

  return (
    <div onClick={onClick} className={style}>
      {Icon && <div className="text-[20px] sm:text-[30px]">{Icon}</div>}
      {title && <p className="capitalize">{title}</p>}
    </div>
  );
};

export default Option;
