import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskControl from "./components/TaskControl";

import { finishAll } from "./store/tasksSlice";

function App() {
  const [showCompleted, setShowCompleted] = useState(true);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const visibleTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.done);

  return (
    <>
      <h1 className="title">Lista zadań</h1>

      <section className="card">
        <h2 className="card__title">Dodaj nowe zadanie</h2>
        <TaskForm />
      </section>

      <section className="card">
        <div className="card__header">
          <h2 className="card__title">Lista zadań</h2>

          <TaskControl
            showCompleted={showCompleted}
            setShowCompleted={setShowCompleted}
            finishAll={() => dispatch(finishAll())}
            tasks={tasks}
          />
        </div>

        <TaskList tasks={visibleTasks} />
      </section>
    </>
  );
}

export default App;
