import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../store/tasksSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <li className="task-row">
      <button
        className="task-status"
        onClick={() => dispatch(toggleTask(task.id))}
      >
        {task.done ? "✓" : ""}
      </button>

      <span className={`task-text ${task.done ? "done" : ""}`}>
        {task.text}
      </span>

      <button
        className="delete-task"
        onClick={() => dispatch(deleteTask(task.id))}
      >
        🗑
      </button>
    </li>
  );
}

export default TaskItem;
