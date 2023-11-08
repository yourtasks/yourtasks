import Link from "next/link";
import { twMerge } from "tailwind-merge";

const IconComponent = ({ Icon }) => {
  return <div className="text-[20px] sm:text-[30px]">{Icon}</div>;
};

const Label = ({ label }) => {
  return <p className="capitalize text-sm">{label}</p>;
};

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
    `p-4 flex items-center gap-x-2 click rounded-lg transition font-medium ${
      outlined &&
      "border-2 border-zinc-200 dark:border-zinc-700 active:border-zinc-300 dark:active:border-zinc-600"
    }`,
    className
  );

  if (href) {
    return (
      <Link href={href} onClick={setClose} className={style}>
        {Icon && <IconComponent Icon={Icon} />}
        <Label label={title} />
      </Link>
    );
  }

  return (
    <div onClick={onClick} className={style}>
      {Icon && <IconComponent Icon={Icon} />}
      <Label label={title} />
    </div>
  );
};

export default Option;
