import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => (
  <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
    <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Inicio</Link>
    <Link to="/productos" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Productos</Link>
    <CartWidget />
  </nav>
);