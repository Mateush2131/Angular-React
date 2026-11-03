import { useMemo } from 'react';
import ProductCard from '../components/ProductCard';

const PRODUCTS = [
  { id: 1, name: 'Наушники', price: 2990 },
  { id: 2, name: 'Клавиатура', price: 4590 },
  { id: 3, name: 'Мышь', price: 1890 },
  { id: 4, name: 'Монитор', price: 15990 },
  { id: 5, name: 'Коврик', price: 790 },
  { id: 6, name: 'Веб-камера', price: 3490 },
];

export default function ShopPage() {
  // Стабильная ссылка на массив (на случай если PRODUCTS когда-нибудь станут динамическими)
  const products = useMemo(() => PRODUCTS, []);

  return (
    <div className="page">
      <h1>Магазин</h1>
      <p className="hint">
        ProductCard обёрнут в memo. Открой консоль и добавь товар — рендерятся только нужные
        карточки.
      </p>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
