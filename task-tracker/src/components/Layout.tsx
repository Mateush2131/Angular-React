import { NavLink, Outlet } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

export default function Layout() {
  const { favorites, clearFavorites } = useFavorites();

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    padding: '8px 14px',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: isActive ? 600 : 400,
    color: isActive ? '#fff' : '#374151',
    background: isActive ? '#3b82f6' : 'transparent',
  });

  return (
    <div>
      <header
        style={{
          display: 'flex',
          gap: 4,
          padding: 12,
          borderBottom: '1px solid #e5e7eb',
          alignItems: 'center',
        }}
      >
        <NavLink to="/" style={linkStyle} end>
          Главная
        </NavLink>
        <NavLink to="/tasks" style={linkStyle}>
          Задачи
        </NavLink>
        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
          <span>⭐ {favorites.length}</span>
          {favorites.length > 0 && (
            <button
              onClick={clearFavorites}
              style={{
                padding: '4px 10px',
                fontSize: 12,
                border: '1px solid #ef4444',
                borderRadius: 6,
                background: '#fff',
                color: '#ef4444',
                cursor: 'pointer',
              }}
              title="Очистить избранное"
            >
              Очистить
            </button>
          )}
        </span>
      </header>
      <main style={{ maxWidth: 720, margin: '0 auto', padding: 20 }}>
        <Outlet />
      </main>
    </div>
  );
}
