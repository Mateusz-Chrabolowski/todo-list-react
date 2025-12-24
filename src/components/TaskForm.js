import { useState } from "react";

function TaskForm({ addTask }) {
  const [value, setValue] = useState("");

  const submit = () => {
    if (!value.trim()) return;
    addTask(value);
    setValue("");
  };

  return (
    <form className="task-form" onSubmit={e => e.preventDefault()}>
      <input
        className="task-input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Co jest do zrobienia?"
      />
      <button className="add-btn" onClick={submit}>
        Dodaj zadanie
      </button>
    </form>
  );
}

export default TaskForm;
