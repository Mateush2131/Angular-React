# Части 5–6: useEffect + API и Формы + useRef

## Что внутри

### Вкладка «Каталог пользователей» (Часть 5)
- Загрузка списка с jsonplaceholder
- Выбор пользователя → загрузка деталей
- Три состояния: loading / error / data
- AbortController для отмены запросов
- API вынесен в `src/api.js`

### Вкладка «Регистрация» (Часть 6)
- Контролируемая форма (объект в state)
- Валидация (вычисляемые ошибки, не в state)
- Паттерн «touched» — ошибки только после blur / submit
- Показать/скрыть пароль
- useRef для автофокуса
- Сброс формы после успешной отправки

## Запуск

```bash
npm install
npm run dev
```

## Структура

```
src/
├── api.js
├── utils/validation.js
├── components/
│   ├── UserCatalog.jsx
│   └── RegistrationForm.jsx
├── App.jsx
└── index.css
```
