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

  return (
    <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = '/product-placeholder.svg';
        }}
        style={{ width: '250px' }}
      />
      <div>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <h3>${producto.precio}</h3>
        <button onClick={() => addToCart(producto, 1)} style={{ padding: '10px 20px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};