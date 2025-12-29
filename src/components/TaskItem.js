import styled from "styled-components";

const Row = styled.li.attrs({
  className: "task-row",
})``;

const StatusButton = styled.button.attrs({
  className: "task-status",
})``;

const Text = styled.span.attrs(({ $done }) => ({
  className: `task-text ${$done ? "done" : ""}`,
}))``;

const DeleteButton = styled.button.attrs({
  className: "delete-task",
})``;

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <Row>
      <StatusButton onClick={onToggle}>
        {task.done ? "✓" : ""}
      </StatusButton>

      <Text $done={task.done}>
        {task.text}
      </Text>

      <DeleteButton onClick={onDelete}>
        🗑
      </DeleteButton>
    </Row>
  );
}

export default TaskItem;
