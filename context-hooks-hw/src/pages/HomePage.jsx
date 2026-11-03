import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="page">
      <h1>Context API + Продвинутые хуки</h1>
      <p className="lead">Домашнее задание по Частям 9 и 10</p>

      <section className="exercises">
        <h2>Что реализовано</h2>
        <ul>
          <li>
            <strong>1. Тема через Context</strong> — переключатель light/dark, значение в{' '}
            <code>localStorage</code> (кнопка в шапке)
          </li>
          <li>
            <strong>2. Авторизация через Context</strong> — login / logout, защищённый маршрут{' '}
            <Link to="/profile">/profile</Link>
          </li>
          <li>
            <strong>3. Корзина через Context + useReducer</strong> — паттерн «два контекста»,{' '}
            <Link to="/shop">магазин</Link> и <Link to="/cart">корзина</Link>
          </li>
          <li>
            <strong>4. useDebounce</strong> — поиск с задержкой и индикатором «Печатает...» →{' '}
            <Link to="/search">/search</Link>
          </li>
          <li>
            <strong>5. usePrevious</strong> — показ предыдущего debounced-запроса на той же странице
          </li>
          <li>
            <strong>6. Оптимизация списка</strong> — <code>React.memo</code> + <code>useCallback</code>{' '}
            на карточках товаров и позициях корзины. Смотри <code>console.log</code> при изменении
            количества.
          </li>
        </ul>
      </section>

      <section className="demo-accounts">
        <h3>Тестовые аккаунты</h3>
        <ul>
          <li>
            <code>alice@example.com</code> / <code>123</code>
          </li>
          <li>
            <code>bob@example.com</code> / <code>456</code>
          </li>
        </ul>
      </section>
    </div>
  );
}
