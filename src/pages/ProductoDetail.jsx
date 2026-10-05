import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/useCart';
import { getProducts } from '../data/products';

export const ProductoDetail = () => {
  const { id } = useParams();
  const [resultado, setResultado] = useState({ id: null, estado: 'cargando' });
  const { addToCart } = useCart();
  const productId = Number(id);
  const idValido = Number.isSafeInteger(productId) && productId > 0;

  useEffect(() => {
    const controller = new AbortController();

    if (!idValido) return () => controller.abort();

    getProducts(controller.signal)
      .then((products) => {
        const foundProduct = products.find((product) => product.id === productId);
        setResultado({
          id,
          estado: foundProduct ? 'listo' : 'no-encontrado',
          producto: foundProduct ?? null,
        });
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setResultado({ id, estado: 'error', error: err.message });
      });

    return () => controller.abort();
  }, [id, idValido, productId]);

  if (!idValido) {
    return (
      <section>
        <h2>Producto no encontrado</h2>
        <Link to="/productos">Volver al catálogo</Link>
      </section>
    );
  }
  const estado = resultado.id === id ? resultado.estado : 'cargando';
  const producto = resultado.id === id ? resultado.producto : null;

  if (estado === 'cargando') return <p role="status">Cargando producto...</p>;
  if (estado === 'error') return <p role="alert">{resultado.error}</p>;
  if (estado === 'no-encontrado') {
    return (
      <section>
        <h2>Producto no encontrado</h2>
        <Link to="/productos">Volver al catálogo</Link>
      </section>
    );
  }
  const imageUrl = new URL(`${import.meta.env.BASE_URL}${producto.imagen}`, window.location.href).href;

  return (
    <section className="detail">
      <div className="detail__image">
        <span className="product-card__badge">{producto.etiqueta}</span>
        <img src={imageUrl} alt={producto.nombre} />
      </div>
      <div className="detail__content">
        <Link className="back-link" to="/productos">← Volver a productos</Link>
        <span className="product-card__category">{producto.categoria}</span>
        <h1>{producto.nombre}</h1>
        <p className="detail__description">{producto.descripcion}</p>
        <div className="detail__price">
          <span>Precio final</span>
          <strong>${producto.precio.toLocaleString('es-AR')}</strong>
        </div>
        <button className="button button--primary detail__add" onClick={() => addToCart(producto, 1)}>
          Agregar al carrito <span aria-hidden="true">→</span>
        </button>
        <p className="detail__note">✦ Compra simple · Atención personalizada</p>
      </div>
    </section>
  );
};