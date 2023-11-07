import Container from "@/components/shared/Container";
import TaskItem from "@/components/tasks/TaskItem";

const Page = () => {
  return (
    <Container className="py-4">
      <TaskItem completed={true} data={{ title: "Task 05" }} />
      <TaskItem completed={true} data={{ title: "Task 12" }} />
      <TaskItem completed={true} data={{ title: "Task 15" }} />
      <TaskItem completed={true} data={{ title: "Task 35" }} />
    </Container>
  );
};

export default Page;
