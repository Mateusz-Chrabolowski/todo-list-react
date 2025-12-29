import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskControl from "./components/TaskControl";

function App() {
  // 🔹 wczytanie z localStorage przy starcie
  const tasksFromLocalStorage = localStorage.getItem("tasks");

  const [tasks, setTasks] = useState(
    tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : []
  );

  const [showCompleted, setShowCompleted] = useState(true);

  // 🔹 zapis do localStorage przy każdej zmianie tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ➕ dodanie zadania
  const addTask = (text) => {
    setTasks((prev) => [...prev, { text, done: false }]);
  };

  // ✅ przełączanie done
  const toggleTask = (index) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  // 🗑 usuwanie zadania (i z localStorage)
  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  // ✔ ukończ wszystkie
  const finishAll = () => {
    setTasks((prev) => prev.map((task) => ({ ...task, done: true })));
  };

  // 👁 filtrowanie widoku
  const visibleTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.done);

  return (
    <>
      <h1 className="title">Lista zadań</h1>

      <section className="card">
        <h2 className="card__title">Dodaj nowe zadanie</h2>
        <TaskForm addTask={addTask} />
      </section>

      <section className="card">
        <div className="card__header">
          <h2 className="card__title">Lista zadań</h2>

          <TaskControl
            showCompleted={showCompleted}
            setShowCompleted={setShowCompleted}
            finishAll={finishAll}
            tasks={tasks}
          />
        </div>

        <TaskList
          tasks={visibleTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </section>
    </>
  );
}

export default App;
