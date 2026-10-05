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
    <section className="cart-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">TU SELECCIÓN</span>
          <h1>Tu carrito</h1>
          <p>Todo lo que elegiste, listo para acompañarte.</p>
        </div>
      </div>
      <ul className="cart-list">
        {cart.map((item) => (
          <li className="cart-list__item" key={item.id}>
            <div>
              <span className="product-card__category">{item.categoria}</span>
              <h2>{item.nombre}</h2>
              <p>${item.precio.toLocaleString('es-AR')} c/u</p>
            </div>
            <div className="quantity-control" aria-label={`Cantidad de ${item.nombre}`}>
              <button type="button" aria-label={`Disminuir cantidad de ${item.nombre}`} disabled={item.quantity === 1} onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
              <span>{item.quantity}</span>
              <button type="button" aria-label={`Aumentar cantidad de ${item.nombre}`} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <strong className="cart-list__subtotal">${(item.precio * item.quantity).toLocaleString('es-AR')}</strong>
            <button className="text-button" type="button" onClick={() => removeFromCart(item.id)}>Quitar</button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <span>Total de tu compra</span>
        <strong>${getTotalPrice().toLocaleString('es-AR')}</strong>
        <button className="text-button" type="button" onClick={clearCart}>Vaciar carrito</button>
      </div>
    </section>
  );
};
