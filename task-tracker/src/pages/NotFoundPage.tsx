import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: 60 }}>
      <h1 style={{ fontSize: 72, margin: 0, color: '#9ca3af' }}>404</h1>
      <p style={{ fontSize: 18, color: '#6b7280' }}>Страница не найдена</p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginTop: 16,
          padding: '10px 20px',
          background: '#3b82f6',
          color: '#fff',
          borderRadius: 8,
          textDecoration: 'none',
        }}
      >
        На главную
      </Link>
    </div>
  );
}
