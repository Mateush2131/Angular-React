import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTask } from '../api/tasks';
import { useFavorites } from '../context/FavoritesContext';

export default function TaskDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['tasks', id],
    queryFn: () => getTask(id!),
    enabled: !!id,
    retry: false,
  });

  if (isLoading) return <p>Загрузка...</p>;
  if (isError || !data) {
    return (
      <div>
        <p>Задача не найдена</p>
        <Link to="/tasks">← К списку</Link>
      </div>
    );
  }

  const fav = isFavorite(data.id);

  return (
    <div>
      <Link to="/tasks" style={{ display: 'inline-block', marginBottom: 12 }}>
        ← К списку
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <h1 style={{ margin: 0, flex: 1 }}>{data.title}</h1>
        <button
          onClick={() => toggleFavorite(data.id)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 24 }}
          aria-label={fav ? 'Убрать из избранного' : 'В избранное'}
        >
          {fav ? '⭐' : '☆'}
        </button>
      </div>
      <p style={{ marginTop: 16 }}>{data.body}</p>
      <p style={{ color: '#888', fontSize: 13 }}>Автор: userId {data.userId}</p>
      {data.completed !== undefined && (
        <p style={{ color: data.completed ? '#16a34a' : '#ca8a04', fontSize: 13 }}>
          {data.completed ? 'Выполнена' : 'Активна'}
        </p>
      )}
    </div>
  );
}
