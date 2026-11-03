import { useState } from 'react';
import UserCatalog from './components/UserCatalog';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [tab, setTab] = useState('users'); // 'users' | 'register'
  const [registered, setRegistered] = useState(null);

  const tabStyle = (active) => ({
    padding: '10px 20px',
    border: 'none',
    borderBottom: active ? '3px solid #3b82f6' : '3px solid transparent',
    background: 'transparent',
    cursor: 'pointer',
    fontWeight: active ? 700 : 400,
    fontSize: 15,
    color: active ? '#3b82f6' : '#64748b',
  });

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: 20 }}>
      <h1 style={{ marginTop: 0 }}>Части 5–6: useEffect + Формы</h1>

      <div style={{ display: 'flex', gap: 4, marginBottom: 24, borderBottom: '1px solid #e2e8f0' }}>
        <button style={tabStyle(tab === 'users')} onClick={() => setTab('users')}>
          👥 Каталог пользователей (API)
        </button>
        <button style={tabStyle(tab === 'register')} onClick={() => setTab('register')}>
          📝 Регистрация (форма)
        </button>
      </div>

      {tab === 'users' && <UserCatalog />}

      {tab === 'register' && (
        <div style={{ maxWidth: 450, margin: '0 auto' }}>
          <h2>Регистрация</h2>
          {registered ? (
            <div style={{ padding: 16, background: '#dcfce7', borderRadius: 8 }}>
              <p>✅ Спасибо, {registered.name}!</p>
              <p style={{ fontSize: 14, color: '#555' }}>
                Email: {registered.email}, возраст: {registered.age}
              </p>
              <button
                onClick={() => setRegistered(null)}
                style={{
                  marginTop: 8,
                  padding: '8px 16px',
                  cursor: 'pointer',
                  borderRadius: 6,
                  border: '1px solid #86efac',
                  background: 'white',
                }}
              >
                Зарегистрировать ещё
              </button>
            </div>
          ) : (
            <RegistrationForm onSuccess={setRegistered} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
