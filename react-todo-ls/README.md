# Части 7–8: localStorage + React Router

## Что внутри

### Часть 7 — localStorage
- Кастомный хук `useLocalStorage` с ленивой инициализацией
- Todo переживает перезагрузку страницы
- Тема в настройках тоже сохраняется

### Часть 8 — Роутинг
- `BrowserRouter` + `Routes` + `Route`
- `Layout` с `NavLink` и `Outlet`
- Страницы: Todo, О проекте, Настройки, 404

## Установка и запуск

```bash
npm install
npm install react-router-dom
npm run dev
```

## Структура

```
src/
├── hooks/
│   └── useLocalStorage.js
├── components/
│   ├── Layout.jsx
│   ├── TodoForm.jsx
│   └── TodoItem.jsx
├── pages/
│   ├── TodosPage.jsx
│   ├── AboutPage.jsx
│   ├── SettingsPage.jsx
│   └── NotFoundPage.jsx
├── App.jsx
└── main.jsx
```

## Проверка

1. Добавь задачи → F5 → они на месте
2. Перейди на /about и /settings — без перезагрузки
3. DevTools → Application → Local Storage → ключи `todos-v1` и `theme`
