function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 0',
        borderBottom: '1px solid #eee',
      }}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        style={{ width: 18, height: 18, cursor: 'pointer' }}
      />
      <span
        style={{
          flex: 1,
          textDecoration: todo.done ? 'line-through' : 'none',
          color: todo.done ? '#999' : '#1e293b',
          fontSize: 15,
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          background: 'none',
          border: 'none',
          color: '#ef4444',
          cursor: 'pointer',
          fontSize: 18,
        }}
      >
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
