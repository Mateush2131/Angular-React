import { createContext, useContext, useReducer, useMemo } from 'react';

/**
 * Упражнение 3: Корзина через Context + useReducer
 * товары, количество, итог
 */

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

const ACTIONS = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  CLEAR: 'CLEAR',
};

function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case ACTIONS.REMOVE:
      return state.filter((item) => item.id !== action.payload);
    case ACTIONS.INCREMENT:
      return state.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    case ACTIONS.DECREMENT:
      return state
        .map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    case ACTIONS.CLEAR:
      return [];
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  // Паттерн «два контекста»: данные и dispatch разделены
  return (
    <CartContext.Provider value={items}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (ctx === null) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function useCartDispatch() {
  const ctx = useContext(CartDispatchContext);
  if (ctx === null) throw new Error('useCartDispatch must be used within CartProvider');
  return ctx;
}

/** Удобный хук с вычисляемым итогом */
export function useCartSummary() {
  const items = useCart();
  return useMemo(() => {
    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return { items, totalItems, totalPrice };
  }, [items]);
}

export { ACTIONS as CART_ACTIONS };
