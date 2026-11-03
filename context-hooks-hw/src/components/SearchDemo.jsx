import { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { usePrevious } from '../hooks/usePrevious';

/**
 * Упражнения 4 + 5:
 * - useDebounce: поиск с задержкой + индикатор «печатает...»
 * - usePrevious: показываем предыдущий запрос
 */
const FAKE_RESULTS = [
  'React',
  'React Router',
  'React Query',
  'Redux',
  'Zustand',
  'Context API',
  'useReducer',
  'useMemo',
  'useCallback',
  'custom hooks',
];

export default function SearchDemo() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);
  const previousQuery = usePrevious(debouncedQuery);

  const isTyping = query !== debouncedQuery;

  const results = debouncedQuery
    ? FAKE_RESULTS.filter((r) => r.toLowerCase().includes(debouncedQuery.toLowerCase()))
    : [];

  useEffect(() => {
    if (debouncedQuery) {
      console.log('Поиск выполнен:', debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div className="search-demo">
      <h2>Поиск (useDebounce + usePrevious)</h2>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Начни печатать..."
        className="search-input"
      />

      <div className="search-status">
        {isTyping && <span className="typing">Печатает...</span>}
        {!isTyping && debouncedQuery && (
          <span className="ready">Запрос: «{debouncedQuery}»</span>
        )}
      </div>

      {previousQuery !== undefined && previousQuery !== debouncedQuery && (
        <p className="prev-query">
          Предыдущий запрос: <em>{previousQuery || '(пусто)'}</em>
        </p>
      )}

      <ul className="search-results">
        {results.map((r) => (
          <li key={r}>{r}</li>
        ))}
        {!isTyping && debouncedQuery && results.length === 0 && (
          <li className="empty">Ничего не найдено</li>
        )}
      </ul>
    </div>
  );
}
