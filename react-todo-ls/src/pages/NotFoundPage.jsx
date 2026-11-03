import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: 40 }}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/" style={{ color: '#667eea' }}>
        ← На главную
      </Link>
    </div>
  );
}

export default NotFoundPage;
