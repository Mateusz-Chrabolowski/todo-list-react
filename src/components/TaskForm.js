import { useState, useRef } from "react";
import styled from "styled-components";

const Form = styled.form.attrs({
  className: "task-form",
})``;

const Input = styled.input.attrs({
  className: "task-input",
})``;

const Button = styled.button.attrs({
  className: "add-btn",
})``;

function TaskForm({ addTask }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const submit = () => {
    if (!value.trim()) return;

    addTask(value);
    setValue("");
    inputRef.current.focus();
  };

  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Input
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Co jest do zrobienia?"
      />
      <Button onClick={submit}>
        Dodaj zadanie
      </Button>
    </Form>
  );
}

export default TaskForm;
