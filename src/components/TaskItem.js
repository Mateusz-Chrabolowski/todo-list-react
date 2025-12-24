function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-row">
      <button className="task-status" onClick={onToggle}>
        {task.done ? "✓" : ""}
      </button>

      <span className={`task-text ${task.done ? "done" : ""}`}>
        {task.text}
      </span>

      <button className="delete-task" onClick={onDelete}>
        🗑
      </button>
    </li>
  );
}

export default TaskItem;
