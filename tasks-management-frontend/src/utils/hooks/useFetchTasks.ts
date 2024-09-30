import { TaskType } from "@/types/global";
import { useEffect, useState } from "react";

const tasksApiUrl = "http://localhost:8080/tasks";

export function useFetchTasks() {
  const [tasksData, setTasksData] = useState<TaskType[] | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(`${tasksApiUrl}`, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => {
        setTasksData(data);
        setError(undefined);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
    return () => {
      controller.abort();
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
  }, []);

  return { tasks: tasksData, loading, error };
}
