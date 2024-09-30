"use client";

import TaskList from "@/components/TaskList";
import { TaskType } from "@/types/global";
import { TasksContext } from "@/utils/context/TaskContext";
import { useFetchTasks } from "@/utils/hooks/useFetchTasks";
import { useEffect, useState } from "react";
import Placeholders from "@/components/Placeholders";
import Error from "@/components/Error";

export default function Tasks() {
  const { tasks, loading, error } = useFetchTasks();
  const [tasksData, setTasksData] = useState<TaskType[] | undefined>();

  useEffect(() => {
    if (!loading && !error && tasks) {
      setTasksData(tasks);
    }
  }, [loading, error, tasks]);

  if (error) return <Error />;

  if (loading) return <Placeholders />;

  return (
    <TasksContext.Provider
      value={{ tasks: tasksData, updateTasks: setTasksData }}
    >
      <TaskList />
    </TasksContext.Provider>
  );
}
