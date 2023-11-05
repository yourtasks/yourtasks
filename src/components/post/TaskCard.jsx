const TaskCard = () => {
  return (
    <>
      <div className="py-2 text-lg font-semibold opacity-90 border-2 border-color  border-dashed flex flex-col items-center justify-center rounded-lg click">
        <p className="text-lg font-semibold opacity-70 tracking-widest uppercase">
          Deadline
        </p>
        <p>12 May 2023 at 5:30 pm</p>
      </div>
    </>
  );
};

export default TaskCard;
