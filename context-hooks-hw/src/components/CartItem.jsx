import { memo, useCallback } from 'react';
import { useCartDispatch, CART_ACTIONS } from '../context/CartContext';

/**
 * Упражнение 6: memo + useCallback
 * При изменении количества одной позиции остальные CartItem не рендерятся.
 */
const CartItem = memo(function CartItem({ item }) {
  const dispatch = useCartDispatch();

  const handleInc = useCallback(() => {
    dispatch({ type: CART_ACTIONS.INCREMENT, payload: item.id });
  }, [dispatch, item.id]);

  const handleDec = useCallback(() => {
    dispatch({ type: CART_ACTIONS.DECREMENT, payload: item.id });
  }, [dispatch, item.id]);

  const handleRemove = useCallback(() => {
    dispatch({ type: CART_ACTIONS.REMOVE, payload: item.id });
  }, [dispatch, item.id]);

  console.log('render CartItem:', item.name);

  return (
    <li className="cart-item">
      <span className="cart-item-name">{item.name}</span>
      <span className="cart-item-price">{item.price} ₽</span>
      <div className="cart-item-qty">
        <button onClick={handleDec}>−</button>
        <span>{item.quantity}</span>
        <button onClick={handleInc}>+</button>
      </div>
      <span className="cart-item-sum">{item.price * item.quantity} ₽</span>
      <button className="btn-remove" onClick={handleRemove} title="Удалить">
        ✕
      </button>
    </li>
  );
});

export default CartItem;
