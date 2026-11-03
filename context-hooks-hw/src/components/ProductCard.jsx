import { memo, useCallback } from 'react';
import { useCartDispatch, CART_ACTIONS } from '../context/CartContext';

const ProductCard = memo(function ProductCard({ product }) {
  const dispatch = useCartDispatch();

  const handleAdd = useCallback(() => {
    dispatch({ type: CART_ACTIONS.ADD, payload: product });
  }, [dispatch, product]);

  console.log('render ProductCard:', product.name);

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">{product.price} ₽</p>
      <button onClick={handleAdd}>В корзину</button>
    </div>
  );
});

export default ProductCard;
