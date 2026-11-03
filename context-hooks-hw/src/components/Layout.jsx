import { NavLink, Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useCartSummary } from '../context/CartContext';
import ThemeToggle from './ThemeToggle';

export default function Layout() {
  const { theme } = useTheme();
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCartSummary();

  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <div className={`layout theme-${theme}`}>
      <header className="header">
        <nav className="nav">
          <NavLink to="/" className={linkClass} end>
            Главная
          </NavLink>
          <NavLink to="/shop" className={linkClass}>
            Магазин
          </NavLink>
          <NavLink to="/cart" className={linkClass}>
            Корзина {totalItems > 0 && <span className="badge">{totalItems}</span>}
          </NavLink>
          <NavLink to="/search" className={linkClass}>
            Поиск
          </NavLink>
          <NavLink to="/profile" className={linkClass}>
            Профиль
          </NavLink>
        </nav>

        <div className="header-right">
          <ThemeToggle />
          {isAuthenticated ? (
            <span className="user-info">
              {user.name}
              <button onClick={logout} className="btn-logout">
                Выйти
              </button>
            </span>
          ) : (
            <NavLink to="/login" className="nav-link">
              Войти
            </NavLink>
          )}
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
