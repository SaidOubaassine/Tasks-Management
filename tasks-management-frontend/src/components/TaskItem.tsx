"use client";

import { useContext } from "react";
import { TasksContext } from "@/utils/context/TaskContext";
import { TaskType } from "@/types/global";
import Image from "next/image";
import deleteIcon from "@/icons/delete.svg";
import { format } from "date-fns";
import toast from "react-hot-toast";

interface TaskItemProps {
  task: TaskType;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { updateTasks, tasks } = useContext(TasksContext);

  const deleteTask = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/tasks/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the task");
      }

      const updatedTasks = tasks?.filter((item) => item.id !== id);
      updateTasks(updatedTasks);
      toast.success("The Task is deleted");
    } catch (error) {
      console.error("Error deleting the task:", error);
    }
  };

  return (
    <div className="card col-3 shadow-sm rounded" style={{ width: 350 }}>
      <div className="card-header bg-white">
        <h5 className="card-title">{task.title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{task.description}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            {format(task.dueDate, "MMMM d, yyyy, h:mm a")}
          </small>
        </p>

        <div>Status: {task.status}</div>
      </div>
      <div className="card-footer bg-transparent">
        <div className="d-flex justify-content-between align-items-center mt-2">
          <a
            href={`/tasks/${task.id}/edit`}
            className="card-link text-decoration-none"
          >
            Edit
          </a>
          <Image
            src={deleteIcon}
            width={25}
            height={25}
            alt="Delete task"
            onClick={() => deleteTask(task.id)}
            role="button"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
