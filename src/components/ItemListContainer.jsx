import { useState, useEffect } from 'react';
import { Item } from './Item';
import { getProducts } from '../data/products';

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [estado, setEstado] = useState('cargando');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    getProducts(controller.signal)
      .then((data) => {
        setProductos(data);
        setEstado('listo');
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setError(err.message);
        setEstado('error');
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      {estado === 'cargando' && <p role="status">Cargando productos...</p>}
      {estado === 'error' && <p role="alert">{error}</p>}
      {estado === 'listo' && productos.length === 0 && <p>No hay productos disponibles.</p>}
      {estado === 'listo' && productos.length > 0 && (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
          {productos.map((prod) => (
            <Item key={prod.id} {...prod} />
          ))}
        </div>
      )}
    </div>
  );
};