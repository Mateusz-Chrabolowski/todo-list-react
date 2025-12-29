function TaskControls({ showCompleted, setShowCompleted, finishAll, tasks }) {
  const allDone = tasks.length > 0 && tasks.every(t => t.done);

  return (
    <div className="card__header">
      <div className="controls">
        <button
          onClick={() => setShowCompleted(prev => !prev)}
        >
          {showCompleted ? "Ukryj ukończone" : "Pokaż ukończone"}
        </button>

        <button
          onClick={finishAll}
          disabled={allDone}
        >
          Ukończ wszystkie
        </button>
      </div>
    </div>
  );
}

export default TaskControls;
