# Трекер задач (День 14 + ДЗ)

SPA на React + TypeScript + Vite.

## Стек

- React 18 + TypeScript
- Vite
- React Router v6
- Context API (избранное)
- React Hook Form + Zod
- TanStack Query
- localStorage (кастомный хук `useLocalStorage`)
- `useDebounce` (кастомный хук)
- `useMemo` / `React.memo`

## Что реализовано

### Базовый проект
- Список задач с API `jsonplaceholder.typicode.com`
- Создание задачи (форма + Zod)
- Детальная страница задачи
- Избранное (Context + localStorage)
- Dashboard со статистикой
- 404

### Домашнее задание — Часть 1 (обязательная)

1. **Фильтр по избранному**  
   Переключатель «Все / Избранные» на `/tasks`.  
   Состояние в query-параметре `?filter=favorites` (`useSearchParams`).  
   Ссылку можно скопировать и открыть в новой вкладке.

2. **Кнопка «Очистить избранное»**  
   В шапке рядом со счётчиком ⭐.  
   Показывается только если `favorites.length > 0`.  
   В `FavoritesContextValue` добавлен `clearFavorites: () => void`.

3. **Пустые состояния**  
   Компонент `EmptyState` с пропсами `title: string`, `hint?: string`.  
   Сообщения:
   - «Задач пока нет. Создай первую!»
   - «Ты пока ничего не добавил в избранное ⭐»
   - «Ничего не найдено» (при поиске)

### Часть 2 — Вариант А (оптимизация)

- Поиск по названию с debounce 300 мс (`useDebounce`)
- Фильтрация через `useMemo`
- `TaskCard` обёрнут в `React.memo` + `console.log` для проверки, что рендер только при изменении `task`

## Запуск

```bash
npm install
npm run dev
```

## Структура

```
src/
├── api/tasks.ts
├── components/
│   ├── EmptyState.tsx
│   ├── Layout.tsx
│   ├── TaskCard.tsx
│   └── TaskForm.tsx
├── context/FavoritesContext.tsx
├── hooks/
│   ├── useDebounce.ts
│   └── useLocalStorage.ts
├── pages/
│   ├── HomePage.tsx
│   ├── TasksPage.tsx
│   ├── TaskDetailPage.tsx
│   └── NotFoundPage.tsx
├── schemas/taskSchema.ts
├── App.tsx
└── main.tsx
```
