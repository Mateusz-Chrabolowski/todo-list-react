import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onToggle={() => toggleTask(index)}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
