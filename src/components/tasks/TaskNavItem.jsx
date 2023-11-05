import Link from "next/link";

const TaskNavItem = ({ title, path, href, route }) => {
  const isActive = path === route;

  return (
    <Link
      href={href}
      className={`text-center py-2 w-full font-semibold bg-zinc-800 dark:bg-zinc-300 transition ${
        isActive
          ? "text-zinc-100 dark:text-zinc-900 bg-opacity-100 rounded-lg"
          : "opacity-70  click rounded-lg bg-opacity-0 dark:bg-opacity-0"
      }`}
    >
      {title}
    </Link>
  );
};

export default TaskNavItem;
