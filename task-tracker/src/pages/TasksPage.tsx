import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTasks, createTask } from '../api/tasks';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import EmptyState from '../components/EmptyState';
import { useFavorites } from '../context/FavoritesContext';
import { useDebounce } from '../hooks/useDebounce';
import type { TaskFormValues } from '../schemas/taskSchema';

export default function TasksPage() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? 'all';
  const { favorites } = useFavorites();

  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  });

  const mutation = useMutation({
    mutationFn: (values: TaskFormValues) =>
      createTask({
        title: values.title,
        body: values.body,
        userId: values.userId,
        completed: false,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const filtered = useMemo(() => {
    if (!data) return [];

    let list = [...data].sort((a, b) => a.id - b.id);

    if (filter === 'favorites') {
      list = list.filter((t) => favorites.includes(t.id));
    }

    if (debouncedSearch.trim()) {
      const q = debouncedSearch.toLowerCase();
      list = list.filter((t) => t.title.toLowerCase().includes(q));
    }

    return list;
  }, [data, filter, favorites, debouncedSearch]);

  function setFilter(value: string) {
    if (value === 'all') {
      searchParams.delete('filter');
    } else {
      searchParams.set('filter', value);
    }
    setSearchParams(searchParams);
  }

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) {
    return (
      <div>
        <p style={{ color: 'red' }}>Ошибка: {(error as Error).message}</p>
        <button onClick={() => refetch()}>Повторить</button>
      </div>
    );
  }

  const isEmpty = filtered.length === 0;
  const isFavoritesEmpty = filter === 'favorites' && favorites.length === 0;
  const isSearchEmpty = debouncedSearch.trim() !== '' && filtered.length === 0;

  return (
    <div>
      <h1>Задачи</h1>

      {/* Фильтры */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
          Все
        </FilterButton>
        <FilterButton active={filter === 'favorites'} onClick={() => setFilter('favorites')}>
          Избранные
        </FilterButton>
      </div>

      {/* Поиск (Вариант А) */}
      <input
        type="search"
        placeholder="Поиск по названию..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: 10,
          marginBottom: 16,
          border: '1px solid #d1d5db',
          borderRadius: 8,
          fontSize: 14,
        }}
      />

      <TaskForm onSubmit={(values) => mutation.mutateAsync(values)} />

      {isEmpty ? (
        isFavoritesEmpty ? (
          <EmptyState title="Ты пока ничего не добавил в избранное ⭐" hint="Нажми ☆ рядом с задачей" />
        ) : isSearchEmpty ? (
          <EmptyState title="Ничего не найдено" hint={`По запросу «${debouncedSearch}»`} />
        ) : (
          <EmptyState title="Задач пока нет. Создай первую!" />
        )
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
          {filtered.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '6px 14px',
        borderRadius: 8,
        border: '1px solid #d1d5db',
        background: active ? '#3b82f6' : '#fff',
        color: active ? '#fff' : '#374151',
        cursor: 'pointer',
        fontWeight: active ? 600 : 400,
      }}
    >
      {children}
    </button>
  );
}
