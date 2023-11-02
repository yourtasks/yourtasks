import Link from "next/link";

const TaskNavItem = ({ title, path, href, route }) => {
  console.log(path);
  const isActive = path === route;

  return (
    <Link
      href={href}
      className={`text-center py-2 w-full font-semibold border-b-4 transition ${
        isActive
          ? "text-cyan-500 border-cyan-500"
          : "opacity-70 border-transparent click rounded-lg"
      }`}
    >
      {title}
    </Link>
  );
};

export default TaskNavItem;
