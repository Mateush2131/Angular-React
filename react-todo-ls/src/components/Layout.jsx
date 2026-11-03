import { NavLink, Outlet } from 'react-router-dom';

const linkStyle = ({ isActive }) => ({
  padding: '8px 16px',
  textDecoration: 'none',
  color: isActive ? '#667eea' : '#64748b',
  fontWeight: isActive ? 700 : 400,
  borderBottom: isActive ? '2px solid #667eea' : '2px solid transparent',
});

function Layout() {
  return (
    <div style={{ maxWidth: 560, margin: '40px auto', padding: 20 }}>
      <nav style={{ display: 'flex', gap: 8, marginBottom: 24, borderBottom: '1px solid #e2e8f0' }}>
        <NavLink to="/" end style={linkStyle}>
          📝 Todo
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          ℹ️ О проекте
        </NavLink>
        <NavLink to="/settings" style={linkStyle}>
          ⚙️ Настройки
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
