import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';

export const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  const total = getTotalQuantity();

  return (
    <Link
      to="/carrito"
      aria-label={`Carrito de compras, ${total} productos`}
      style={{ textDecoration: 'none', color: '#000', fontSize: '1.2rem' }}
    >
      🛒 <span aria-live="polite" style={{ background: 'red', color: 'white', borderRadius: '50%', padding: '2px 8px', fontSize: '0.8rem' }}>{total}</span>
    </Link>
  );
};