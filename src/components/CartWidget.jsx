import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';

export const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  const total = getTotalQuantity();

  return (
    <Link to="/carrito" aria-label={`Carrito de compras, ${total} productos`} className="cart-widget">
      <svg aria-hidden="true" className="cart-widget__icon" viewBox="0 0 24 24" fill="none">
        <path d="M3 4h2l2.1 11.1a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 1.9-1.4L21 9H6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <circle cx="10" cy="20" r="1.3" fill="currentColor" />
        <circle cx="18" cy="20" r="1.3" fill="currentColor" />
      </svg>
      <span className="cart-widget__label">Carrito</span>
      <span className="cart-widget__count" aria-live="polite">{total}</span>
    </Link>
  );
};
