import { createContext, useContext, useMemo, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * Упражнение 2: Авторизация через Context
 * user, login(), logout() + защищённый маршрут
 */
const AuthContext = createContext(null);

// Фейковые пользователи для демо
const USERS = [
  { id: 1, name: 'Алиса', email: 'alice@example.com', password: '123' },
  { id: 2, name: 'Боб', email: 'bob@example.com', password: '456' },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('auth-user', null);

  const login = useCallback(
    (email, password) => {
      const found = USERS.find((u) => u.email === email && u.password === password);
      if (!found) {
        return { ok: false, error: 'Неверный email или пароль' };
      }
      const { password: _, ...safeUser } = found;
      setUser(safeUser);
      return { ok: true };
    },
    [setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  const value = useMemo(
    () => ({ user, login, logout, isAuthenticated: !!user }),
    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
