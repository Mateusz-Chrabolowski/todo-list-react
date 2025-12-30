import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice"; // ścieżka może być ../store/...

function TaskForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const submit = () => {
    if (!value.trim()) return;

    dispatch(addTask(value));
    setValue("");
  };

  return (
    <form className="task-form" onSubmit={(e) => e.preventDefault()}>
      <input
        className="task-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Co jest do zrobienia?"
      />
      <button className="add-btn" onClick={submit}>
        Dodaj zadanie
      </button>
    </form>
  );
}

export default TaskForm;
