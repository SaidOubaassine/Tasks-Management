"use client";

import TaskForm from "@/components/TaskForm";
import { TaskType } from "@/types/global";
import { useFetchTasks } from "@/utils/hooks/useFetchTasks";

export default function Page({ params }: { params: { id: number } }) {
  const { tasks } = useFetchTasks();
  const task: TaskType | undefined = tasks?.find(
    (task) => task.id == params.id
  );

  return <TaskForm task={task} />;
}
