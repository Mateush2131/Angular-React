import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTasks } from '../api/tasks';
import { useFavorites } from '../context/FavoritesContext';

export default function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  });
  const { favorites } = useFavorites();

  const total = data?.length ?? 0;
  const completed = data?.filter((t) => t.completed).length ?? 0;
  const active = total - completed;

  return (
    <div>
      <h1>Dashboard</h1>
      {isLoading ? (
        <p>Загрузка статистики...</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 12,
            marginBottom: 24,
          }}
        >
          <StatCard label="Всего задач" value={total} />
          <StatCard label="Активных" value={active} />
          <StatCard label="Выполненных" value={completed} />
          <StatCard label="В избранном" value={favorites.length} />
        </div>
      )}
      <Link
        to="/tasks"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          background: '#3b82f6',
          color: '#fff',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 500,
        }}
      >
        Перейти к задачам →
      </Link>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div
      style={{
        padding: 16,
        background: '#f3f4f6',
        borderRadius: 10,
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 28, fontWeight: 700 }}>{value}</div>
      <div style={{ fontSize: 13, color: '#6b7280', marginTop: 4 }}>{label}</div>
    </div>
  );
}
