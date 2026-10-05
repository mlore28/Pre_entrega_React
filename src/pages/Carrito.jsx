import { useCart } from '../context/useCart';

export const Carrito = () => {
  const { cart, getTotalPrice, clearCart, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <section>
        <h2>Carrito de Compras</h2>
        <p>El carrito está vacío.</p>
      </section>
    );
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            {item.nombre} - Cantidad: {item.quantity} - Subtotal: ${item.precio * item.quantity}
            {' '}
            <button type="button" aria-label={`Disminuir cantidad de ${item.nombre}`} disabled={item.quantity === 1} onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
            {' '}
            <button type="button" aria-label={`Aumentar cantidad de ${item.nombre}`} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            {' '}
            <button type="button" onClick={() => removeFromCart(item.id)}>Quitar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotalPrice()}</h3>
      <button type="button" onClick={clearCart} style={{ padding: '8px 15px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}>
        Vaciar Carrito
      </button>
    </div>
  );
};
