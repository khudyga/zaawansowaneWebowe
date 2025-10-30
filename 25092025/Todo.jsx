const Todo = ({ task, onToggle, onDelete }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={onDelete(task.id)}>Usuń</button>
    </div>
  );
};

export default Todo;
