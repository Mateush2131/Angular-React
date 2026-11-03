import { useState } from 'react';

const priorityColors = {
  high: '#ef4444',
  medium: '#f59e0b',
  low: '#22c55e',
};

const priorityLabels = {
  high: '🔴',
  medium: '🟡',
  low: '🟢',
};

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function handleSave() {
    const trimmed = editText.trim();
    if (!trimmed) return; // валидация: не сохраняем пустое
    onEdit(todo.id, trimmed);
    setIsEditing(false);
  }

  function handleCancel() {
    setEditText(todo.text);
    setIsEditing(false);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') handleCancel();
  }

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 14px',
        background: 'white',
        borderRadius: 10,
        marginBottom: 8,
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        borderLeft: `4px solid ${priorityColors[todo.priority] || '#cbd5e1'}`,
        opacity: todo.done ? 0.65 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        style={{ width: 18, height: 18, cursor: 'pointer' }}
      />

      <span style={{ fontSize: 14 }} title={todo.priority}>
        {priorityLabels[todo.priority]}
      </span>

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{
            flex: 1,
            padding: '6px 10px',
            borderRadius: 6,
            border: '1px solid #667eea',
            fontSize: 15,
          }}
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          style={{
            flex: 1,
            fontSize: 15,
            textDecoration: todo.done ? 'line-through' : 'none',
            color: todo.done ? '#94a3b8' : '#1e293b',
            cursor: 'pointer',
          }}
          title="Двойной клик для редактирования"
        >
          {todo.text}
        </span>
      )}

      {isEditing ? (
        <>
          <button
            onClick={handleSave}
            disabled={!editText.trim()}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: editText.trim() ? 'pointer' : 'not-allowed',
              fontSize: 18,
              opacity: editText.trim() ? 1 : 0.4,
            }}
          >
            💾
          </button>
          <button
            onClick={handleCancel}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: 16,
            }}
          >
            ✖️
          </button>
        </>
      ) : (
        <button
          onClick={() => onDelete(todo.id)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: 18,
            color: '#ef4444',
          }}
        >
          ✕
        </button>
      )}
    </li>
  );
}

export default TodoItem;
