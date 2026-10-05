import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => (
  <nav className="site-nav" aria-label="Navegación principal">
    <NavLink to="/" end className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}>Inicio</NavLink>
    <NavLink to="/productos" className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}>Productos</NavLink>
    <CartWidget />
  </nav>
);
