import { useEffect, useState } from 'react';

/**
 * Синхронизирует состояние React с localStorage.
 *
 * @param {string} key — ключ в localStorage
 * @param {any} initialValue — значение по умолчанию (если в хранилище пусто)
 * @returns {[any, Function]} — [значение, сеттер] (как у useState)
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return typeof initialValue === 'function' ? initialValue() : initialValue;
    } catch (error) {
      console.warn(`useLocalStorage: не удалось прочитать "${key}"`, error);
      return typeof initialValue === 'function' ? initialValue() : initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`useLocalStorage: не удалось сохранить "${key}"`, error);
    }
  }, [key, value]);

  return [value, setValue];
}
