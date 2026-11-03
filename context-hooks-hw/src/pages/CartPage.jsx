import { useCartSummary, useCartDispatch, CART_ACTIONS } from '../context/CartContext';
import CartItem from '../components/CartItem';

export default function CartPage() {
  const { items, totalItems, totalPrice } = useCartSummary();
  const dispatch = useCartDispatch();

  if (items.length === 0) {
    return (
      <div className="page">
        <h1>Корзина</h1>
        <p className="empty">Корзина пуста. Загляни в магазин!</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Корзина</h1>
      <p className="hint">
        CartItem в memo. Меняй количество одной позиции — в консоли только один «render CartItem».
      </p>

      <ul className="cart-list">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <div className="cart-summary">
        <p>
          Товаров: <strong>{totalItems}</strong>
        </p>
        <p>
          Итого: <strong>{totalPrice} ₽</strong>
        </p>
        <button
          className="btn-clear"
          onClick={() => dispatch({ type: CART_ACTIONS.CLEAR })}
        >
          Очистить корзину
        </button>
      </div>
    </div>
  );
}
