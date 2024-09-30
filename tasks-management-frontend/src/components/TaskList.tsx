"use client";

import { useContext, useMemo } from "react";
import { StatusContext, TasksContext } from "@/utils/context/TaskContext";
import TaskItem from "./TaskItem";
import { TaskType } from "@/types/global";

function TaskList() {
  const { tasks } = useContext(TasksContext);
  const { status, search } = useContext(StatusContext);

  const filterTasks = (task: TaskType) => {
    const matchesStatus = status ? task.status === status : true;
    const matchesSearch = search ? task.title.includes(search) : true;
    return matchesStatus && matchesSearch;
  };

  const filteredTasks = useMemo(
    () => tasks?.filter(filterTasks) || [],
    [status, search, tasks]
  );

  return (
    <div
      className="container w-100"
      style={{ marginTop: 100, marginBottom: 100 }}
    >
      <div className="row justify-content-center gap-5">
        {filteredTasks.map((task: TaskType) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
