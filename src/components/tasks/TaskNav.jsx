"use client";
import { usePathname } from "next/navigation";
import TaskNavItem from "./TaskNavItem";

const TaskNav = () => {
  const pathname = usePathname().split("/");
  const path = pathname[pathname.length - 1];

  return (
    <div className="sticky top-0 left-0 z-30 w-full h-fit flex items-center gap-x-2 px-4 card">
      <TaskNavItem path={path} href={"/tasks"} route="tasks" title="Pending" />
      <TaskNavItem
        path={path}
        href={"/tasks/completed"}
        route="completed"
        title="Completed"
      />
    </div>
  );
};

export default TaskNav;
