import styled from "styled-components";
import TaskItem from "./TaskItem";

const List = styled.ul.attrs({
  className: "task-list",
})``;

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <List>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onToggle={() => toggleTask(index)}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </List>
  );
}

export default TaskList;
