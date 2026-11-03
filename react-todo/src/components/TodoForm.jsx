import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd({ text: trimmed, priority });
    setText('');
    setPriority('medium');
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: 8,
        marginBottom: 20,
        flexWrap: 'wrap',
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Что нужно сделать?"
        style={{
          flex: 1,
          minWidth: 180,
          padding: '10px 14px',
          borderRadius: 8,
          border: '1px solid #cbd5e1',
          fontSize: 15,
        }}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{
          padding: '10px 12px',
          borderRadius: 8,
          border: '1px solid #cbd5e1',
          fontSize: 14,
        }}
      >
        <option value="high">🔴 Высокий</option>
        <option value="medium">🟡 Средний</option>
        <option value="low">🟢 Низкий</option>
      </select>
      <button
        type="submit"
        style={{
          padding: '10px 18px',
          borderRadius: 8,
          border: 'none',
          background: '#667eea',
          color: 'white',
          fontWeight: 600,
          cursor: 'pointer',
          fontSize: 14,
        }}
      >
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;
