import { useState } from 'react';
import TodoForm from './components/TodoForm';
import Filters from './components/Filters';
import TodoList from './components/TodoList';
import ProgressBar from './components/ProgressBar';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Изучить useState', done: true, priority: 'high' },
    { id: 2, text: 'Разобраться со списками', done: false, priority: 'medium' },
    { id: 3, text: 'Сделать todo', done: false, priority: 'low' },
  ]);

  const [filter, setFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('date'); // 'date' | 'alpha'

  // ---- Колбэки ----
  function addTodo({ text, priority }) {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, priority, done: false },
    ]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function editTodo(id, newText) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  }

  // Массовые операции
  function markAllDone() {
    setTodos((prev) => prev.map((t) => ({ ...t, done: true })));
  }

  function deleteDone() {
    setTodos((prev) => prev.filter((t) => !t.done));
  }

  function clearAll() {
    if (window.confirm('Удалить все задачи?')) {
      setTodos([]);
    }
  }

  // ---- Вычисляемые данные ----
  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t.done).length,
    done: todos.filter((t) => t.done).length,
  };

  let visibleTodos = todos.filter((t) => {
    if (filter === 'active' && t.done) return false;
    if (filter === 'done' && !t.done) return false;
    if (priorityFilter !== 'all' && t.priority !== priorityFilter) return false;
    if (search.trim()) {
      return t.text.toLowerCase().includes(search.trim().toLowerCase());
    }
    return true;
  });

  // Сортировка
  visibleTodos = [...visibleTodos].sort((a, b) => {
    if (sortBy === 'alpha') {
      return a.text.localeCompare(b.text, 'ru');
    }
    return a.id - b.id; // по дате добавления (id = Date.now)
  });

  return (
    <div style={{ maxWidth: 560, margin: '40px auto', padding: 20 }}>
      <h1 style={{ marginTop: 0 }}>📝 Todo List</h1>

      <ProgressBar done={counts.done} total={counts.all} />

      <TodoForm onAdd={addTodo} />

      {/* Поиск */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Поиск задач..."
        style={{
          width: '100%',
          padding: '10px 14px',
          borderRadius: 8,
          border: '1px solid #cbd5e1',
          fontSize: 14,
          marginBottom: 12,
          boxSizing: 'border-box',
        }}
      />

      <Filters
        current={filter}
        onChange={setFilter}
        counts={counts}
        priorityFilter={priorityFilter}
        onPriorityChange={setPriorityFilter}
      />

      {/* Сортировка + массовые операции */}
      <div
        style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          marginBottom: 16,
          alignItems: 'center',
        }}
      >
        <button
          onClick={() => setSortBy((s) => (s === 'alpha' ? 'date' : 'alpha'))}
          style={secondaryBtn}
        >
          {sortBy === 'alpha' ? '🔤 По алфавиту' : '📅 По дате'}
        </button>
        <button onClick={markAllDone} style={secondaryBtn}>
          ✅ Отметить все
        </button>
        <button onClick={deleteDone} style={secondaryBtn}>
          🗑 Удалить выполненные
        </button>
        <button onClick={clearAll} style={{ ...secondaryBtn, color: '#ef4444' }}>
          Очистить всё
        </button>
      </div>

      {filter === 'done' && visibleTodos.length === 0 && counts.all > 0 && (
        <p style={{ color: '#f59e0b', fontStyle: 'italic' }}>
          Пока нет выполненных задач. Отметь что-нибудь ✅
        </p>
      )}

      <TodoList
        todos={visibleTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

const secondaryBtn = {
  padding: '6px 12px',
  borderRadius: 8,
  border: '1px solid #cbd5e1',
  background: 'white',
  cursor: 'pointer',
  fontSize: 13,
};

export default App;
