const TaskCard = () => {
  return (
    <>
      <div className="p-2 flex flex-col rounded-md bg-neutral-500 bg-opacity-30 border-2 border-neutral-500 border-opacity-50 no-select">
        <p className="text-xs opacity-60 font-medium">CSE 302 - Database</p>
        <p className="text-lg font-semibold opacity-90">Task title</p>
        <p className="opacity-80">task description</p>
      </div>
      <p className="py-2 text-lg font-semibold opacity-90">
        Deadline - 12 May 2023 at 5:30 pm
      </p>
    </>
  );
};

export default TaskCard;
