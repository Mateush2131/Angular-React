import { useState, useEffect } from 'react';

/**
 * Упражнение 4: useDebounce
 * Возвращает значение с задержкой. Пока value меняется быстрее delay —
 * возвращается предыдущее debounced-значение.
 */
export function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
