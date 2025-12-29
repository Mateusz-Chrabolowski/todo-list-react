import styled from "styled-components";

const Header = styled.div.attrs({
  className: "card__header",
})``;

const Controls = styled.div.attrs({
  className: "controls",
})``;

function TaskControl({ showCompleted, setShowCompleted, finishAll, tasks }) {
  const allDone = tasks.length > 0 && tasks.every(t => t.done);

  return (
    <Header>
      <Controls>
        <button onClick={() => setShowCompleted(prev => !prev)}>
          {showCompleted ? "Ukryj ukończone" : "Pokaż ukończone"}
        </button>

        <button onClick={finishAll} disabled={allDone}>
          Ukończ wszystkie
        </button>
      </Controls>
    </Header>
  );
}

export default TaskControl;
