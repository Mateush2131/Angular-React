import { useAuth } from '../context/AuthContext';

export default function ProfilePage() {
  const { user, logout } = useAuth();

  return (
    <div className="page">
      <h1>Профиль (защищённый маршрут)</h1>
      <div className="profile-card">
        <p>
          <strong>Имя:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <button onClick={logout}>Выйти</button>
      </div>
      <p className="hint">
        Эта страница доступна только авторизованным. Попробуй выйти и зайти на /profile напрямую.
      </p>
    </div>
  );
}
