import { useEffect, useState } from "react";

function useTasks() {
  const tasksFromLocalStorage = localStorage.getItem("tasks");

  const [tasks, setTasks] = useState(
    tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks((prev) => [...prev, { text, done: false }]);
  };

  const toggleTask = (index) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const finishAll = () => {
    setTasks((prev) => prev.map((task) => ({ ...task, done: true })));
  };

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    finishAll,
  };
}

export default useTasks;
