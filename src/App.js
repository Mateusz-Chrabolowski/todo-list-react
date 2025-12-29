import { useRef, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskControl from "./components/TaskControl";
import useTasks from "./useTasks";

function App() {
  const inputRef = useRef(null);
  const [showCompleted, setShowCompleted] = useState(true);

  const {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    finishAll,
  } = useTasks();

  const visibleTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.done);

  const handleAddTask = (text) => {
    addTask(text);
    inputRef.current?.focus();
  };

  return (
    <>
      <h1 className="title">Lista zadań</h1>

      <section className="card">
        <h2 className="card__title">Dodaj nowe zadanie</h2>
        <TaskForm addTask={handleAddTask} />
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
