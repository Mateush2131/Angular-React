import { useLocalStorage } from '../hooks/useLocalStorage';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

const STORAGE_KEY = 'todos-v1';

function TodosPage() {
  const [todos, setTodos] = useLocalStorage(STORAGE_KEY, []);

  function addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function clearAll() {
    if (confirm('Удалить все задачи?')) {
      setTodos([]);
    }
  }

  const doneCount = todos.filter((t) => t.done).length;

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>📝 Todo (сохраняется)</h1>

      <TodoForm onAdd={addTodo} />

      <p style={{ color: '#666', fontSize: 14 }}>
        Всего: {todos.length} | Выполнено: {doneCount}
      </p>

      {todos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999', padding: 40 }}>
          Задач пока нет. Добавь первую — она переживёт перезагрузку!
        </p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
          <button
            onClick={clearAll}
            style={{
              marginTop: 16,
              color: '#ef4444',
              background: 'none',
              border: '1px solid #fca5a5',
              borderRadius: 8,
              padding: '8px 16px',
              cursor: 'pointer',
            }}
          >
            Очистить всё
          </button>
        </>
      )}
    </div>
  );
}

export default TodosPage;
