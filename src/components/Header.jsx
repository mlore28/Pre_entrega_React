import { NavBar } from './NavBar';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="site-header">
    <div className="site-header__inner">
      <Link className="brand" to="/" aria-label="Boss-it, inicio">
        <span className="brand__mark" aria-hidden="true">B</span>
        <span>Boss-it<span className="brand__accent">.</span></span>
      </Link>
      <NavBar />
    </div>
  </header>
);
