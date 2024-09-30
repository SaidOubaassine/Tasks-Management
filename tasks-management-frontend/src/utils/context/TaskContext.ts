import { createContext, Dispatch, SetStateAction } from "react";
import { TaskType } from "@/types/global";

export const TasksContext = createContext<{
  tasks: TaskType[] | undefined;
  updateTasks: Dispatch<SetStateAction<TaskType[] | undefined>>;
}>({ tasks: [], updateTasks: () => [] });

export const StatusContext = createContext({ status: "", search: "" });
