import { Link } from 'react-router-dom';

export const Item = ({ id, nombre, precio, imagen }) => (
  <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', textAlign: 'center', width: '220px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
    <img
      src={imagen}
      alt={nombre}
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = '/product-placeholder.svg';
      }}
      style={{ width: '100%', borderRadius: '4px' }}
    />
    <h4 style={{ margin: '10px 0 5px' }}>{nombre}</h4>
    <p style={{ fontWeight: 'bold', color: '#28a745' }}>${precio}</p>
    <Link to={`/producto/${id}`} style={{ display: 'inline-block', marginTop: '10px', background: '#007bff', color: 'white', padding: '8px 12px', textDecoration: 'none', borderRadius: '4px' }}>
      Ver Detalle
    </Link>
  </div>
);