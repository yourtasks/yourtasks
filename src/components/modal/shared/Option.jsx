import { twMerge } from "tailwind-merge";

const Option = ({ className, title = "title", Icon, outlined = false }) => {
  return (
    <div
      className={twMerge(
        `p-4 flex items-center gap-x-2 click rounded-lg transition opacity-70 sm:hover:opacity-100 ${
          outlined &&
          "border-2 border-zinc-200 dark:border-zinc-700 active:border-zinc-300 dark:active:border-zinc-600"
        }`,
        className
      )}
    >
      {Icon && <div>{Icon}</div>}
      <p className="capitalize">{title}</p>
    </div>
  );
};

export default Option;
