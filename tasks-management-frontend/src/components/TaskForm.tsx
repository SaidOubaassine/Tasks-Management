"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import "@/styles/form.css";
import { TaskFormProps, TaskType } from "@/types/global";

const TaskForm: React.FC<TaskFormProps> = ({ task }) => {
  
  const defaultTask: TaskType = {
    id: 0,
    title: "",
    description: "",
    status: "en-attente",
    dueDate: "",
  };

  const [formData, setFormData] = useState<TaskType>(task || defaultTask);

  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const method = task ? "PUT" : "POST";
    const url = task
      ? `http://localhost:8080/tasks/${task.id}`
      : "http://localhost:8080/tasks";
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      if (task) {
        toast.success("The Task is updated");
      } else {
        toast.success("The Task is created");
      }
    } catch (error) {
      toast.success("Error");
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="p-5 rounded"
        style={{ marginTop: 50, backgroundColor: "#A0DEFF" }}
      >
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          className="form-control"
          required
          onChange={handleChange}
          value={formData.title}
        />
        <input
          id="dueDate"
          name="dueDate"
          type="datetime-local"
          className="form-control mt-5"
          required
          onChange={handleChange}
          value={formData.dueDate}
        />
        <select
          id="status"
          name="status"
          className="form-control mt-5"
          onChange={handleChange}
          value={formData.status}
        >
          <option value="en-attente">En attente</option>
          <option value="en-cours">En cours</option>
          <option value="terminé">Terminé</option>
        </select>
        <textarea
          id="description"
          name="description"
          className="form-control mt-5"
          placeholder="Description"
          required
          rows={5}
          onChange={handleChange}
          value={formData.description}
        />
        <button className="btn btn-primary mt-5 w-100" type="submit">
          {task ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
