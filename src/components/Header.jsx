import { NavBar } from './NavBar';

export const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', background: '#f8f9fa', borderBottom: '1px solid #e9ecef' }}>
    <h2 style={{ margin: 0 }}>Mi Tienda Online</h2>
    <NavBar />
  </header>
);
