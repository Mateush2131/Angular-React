import { useLocalStorage } from '../hooks/useLocalStorage';

function SettingsPage() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Настройки</h1>
      <p>
        Тема: <strong>{theme === 'dark' ? 'Тёмная' : 'Светлая'}</strong>
      </p>
      <button
        onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        style={{
          padding: '10px 20px',
          borderRadius: 8,
          border: 'none',
          background: theme === 'dark' ? '#334155' : '#667eea',
          color: 'white',
          cursor: 'pointer',
          fontWeight: 600,
        }}
      >
        Переключить тему
      </button>
      <p style={{ marginTop: 16, fontSize: 14, color: '#64748b' }}>
        Тема тоже сохраняется в localStorage (ключ <code>theme</code>).
      </p>
    </div>
  );
}

export default SettingsPage;
