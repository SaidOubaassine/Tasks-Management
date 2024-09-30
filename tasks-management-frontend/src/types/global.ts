import { ChangeEvent } from "react";

export type TaskType = {
  id: number;
  title: string;
  description: string;
  status: string;
  dueDate: string;
};

export interface TaskFormProps {
  task?: TaskType;
}

export type SideBarProps = {
  search: (e: ChangeEvent<HTMLInputElement>) => void;
  filterStatus: (e: ChangeEvent<HTMLInputElement>) => void;
};
