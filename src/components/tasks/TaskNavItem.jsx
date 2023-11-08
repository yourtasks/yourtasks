import Link from "next/link";

const TaskNavItem = ({ title, path, href, route }) => {
  const isActive = path === route;

  return (
    <Link
      href={href}
      className={`text-center py-2 w-full font-semibold transition ${
        isActive
          ? "text-cyan-500 rounded-lg bg-cyan bg-opacity-20 cursor-default"
          : "opacity-70 hover:opacity-100  click rounded-lg bg-opacity-0 dark:bg-opacity-0"
      }`}
    >
      {title}
    </Link>
  );
};

export default TaskNavItem;
