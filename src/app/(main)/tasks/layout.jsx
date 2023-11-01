import TaskNav from "@/components/tasks/TaskNav";

const layout = ({ children }) => {
  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      <TaskNav />
      {children}
    </div>
  );
};

export default layout;
