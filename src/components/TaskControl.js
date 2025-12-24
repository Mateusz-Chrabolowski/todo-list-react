function TaskControls({ showCompleted, setShowCompleted, finishAll, tasks }) {
  const allDone = tasks.length > 0 && tasks.every(t => t.done);

  return (
        <div className="card__header">
            <div className="controls">
                <button>Ukryj ukończone</button>
                <button>Ukończ wszystkie</button>
            </div>
        </div>
        );
    }

export default TaskControls;
