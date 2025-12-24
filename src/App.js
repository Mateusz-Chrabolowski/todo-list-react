import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskControls from "./components/TaskControl";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  const addTask = (text) => {
    setTasks(prev => [...prev, { text, done: false }]);
  };

  const toggleTask = (index) => {
    setTasks(prev =>
      prev.map((t, i) =>
        i === index ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  const finishAll = () => {
    setTasks(prev => prev.map(t => ({ ...t, done: true })));
  };

  const visibleTasks = showCompleted
    ? tasks
    : tasks.filter(t => !t.done);

  return (
    <>
      <h1 className="title">Lista zadań</h1>

      <section className="card">
        <h2 className="card__title">Dodaj nowe zadanie</h2>
        <TaskForm addTask={addTask} />
      </section>

      <section className="card">
        <div className="card__title">
          <h2>Lista zadań</h2>
          <TaskControls
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
