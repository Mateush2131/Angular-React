import { useRef, useEffect } from 'react';

/**
 * Упражнение 5: usePrevious
 * Возвращает значение из предыдущего рендера.
 * На первом рендере — undefined.
 */
export function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
