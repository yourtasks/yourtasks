"use client";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import Empty from "@/components/shared/Empty";
import TaskItem from "@/components/tasks/TaskItem";
import { useState } from "react";
import toast from "react-hot-toast";

const tasksInitial = [
  {
    id: 1,
    title: "Task 01",
  },
  {
    id: 2,
    title: "Task 02",
  },
  {
    id: 3,
    title: "Task 03",
  },
  {
    id: 4,
    title: "Task 04",
  },
  {
    id: 5,
    title: "Task 05",
  },
  {
    id: 6,
    title: "Task 06",
  },
  {
    id: 7,
    title: "Task 07",
  },
  {
    id: 8,
    title: "Task 08",
  },
  {
    id: 9,
    title: "Task 09",
  },
];

const Page = () => {
  const [tasks, setTasks] = useState(tasksInitial);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(selected);

  const handleSubmit = () => {
    setLoading(true);

    const filter = tasks.filter((task) => !selected.includes(task.id));

    setTimeout(() => {
      setTasks(filter);
      setSelected([]);
      setLoading(false);
      toast.success("Marked successfully", {
        position: "bottom-center",
      });
    }, 1000);
  };
  return (
    <Container className="relative">
      <div className="w-full h-full flex flex-col gap-y-2 overflow-y-auto pb-[200px]">
        {tasks.length > 0 && (
          <div className="fixed sm:sticky bottom-[64px] sm:top-0 left-0 z-10 w-full px-4 py-2">
            <Button
              disabled={selected.length === 0}
              loading={loading}
              onClick={handleSubmit}
              title="Mark as completed"
              className="w-full"
            />
          </div>
        )}
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              data={task}
              selected={selected}
              setSelected={setSelected}
            />
          ))
        ) : (
          <Empty title="No tasks yet" />
        )}
      </div>
    </Container>
  );
};

export default Page;
