# Context API + Продвинутые хуки — Домашнее задание

Упражнения из Частей 9 и 10 курса.

## Запуск

```bash
npm install
npm run dev
```

## Что реализовано

### Часть 9 — Context API

| # | Задание | Где смотреть |
|---|---------|--------------|
| 1 | **Тема через Context** (light/dark + localStorage) | Кнопка 🌙/☀️ в шапке. Значение сохраняется, переживает F5 |
| 2 | **Авторизация через Context** | `/login` → `/profile`. Защищённый маршрут `ProtectedRoute`. Аккаунты: `alice@example.com` / `123`, `bob@example.com` / `456` |
| 3 | **Корзина через Context + useReducer** | Паттерн «два контекста» (`CartContext` + `CartDispatchContext`). `/shop` и `/cart` |

### Часть 10 — Продвинутые хуки

| # | Задание | Где смотреть |
|---|---------|--------------|
| 4 | **useDebounce** | `/search` — индикатор «Печатает...» пока debounce не сработал |
| 5 | **usePrevious** | На той же странице — предыдущий debounced-запрос |
| 6 | **Оптимизация списка** | `ProductCard` и `CartItem` в `React.memo` + `useCallback`. В консоли: при +/− одной позиции рендерится только она |

## Структура

```
src/
├── context/
│   ├── ThemeContext.jsx    # тема + localStorage
│   ├── AuthContext.jsx     # user, login, logout
│   └── CartContext.jsx     # useReducer + два контекста
├── hooks/
│   ├── useLocalStorage.js
│   ├── useDebounce.js
│   └── usePrevious.js
├── components/
│   ├── Layout.jsx
│   ├── ThemeToggle.jsx
│   ├── ProtectedRoute.jsx
│   ├── ProductCard.jsx     # memo
│   ├── CartItem.jsx        # memo + useCallback
│   └── SearchDemo.jsx      # debounce + previous
├── pages/
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── ProfilePage.jsx     # protected
│   ├── ShopPage.jsx
│   ├── CartPage.jsx
│   ├── SearchPage.jsx
│   └── NotFoundPage.jsx
├── App.jsx
└── main.jsx
```

## Ключевые паттерны

- **Два контекста** (данные + dispatch) — `CartContext` / `CartDispatchContext`
- **Кастомные хуки с проверкой** — `useTheme`, `useAuth`, `useCart`, `useCartDispatch`
- **Стабилизация value** через `useMemo` / `useCallback` в провайдерах
- **Каскад мемоизации**: `memo` + `useCallback` на элементах списка
