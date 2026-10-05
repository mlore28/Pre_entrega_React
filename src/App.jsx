import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import { Layout } from './components/Layout';
import { ItemListContainer } from './components/ItemListContainer';
import { ProductoDetail } from './pages/ProductoDetail';
import { Carrito } from './pages/Carrito';

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={(
              <section className="hero">
                <div className="hero__copy">
                  <span className="eyebrow">TECNOLOGÍA PARA DISFRUTAR</span>
                  <h1>Tu próximo favorito está <span>acá.</span></h1>
                  <p>Productos seleccionados para que trabajes, juegues y disfrutes más.</p>
                  <Link className="button button--primary" to="/productos">Explorar productos <span aria-hidden="true">→</span></Link>
                  <div className="hero__trust"><span><strong>3</strong> productos elegidos</span><span><strong>Envío</strong> a todo el país</span></div>
                </div>
                <div className="hero__art" aria-hidden="true">
                  <div className="hero__orb hero__orb--one" /><div className="hero__orb hero__orb--two" /><div className="hero__sparkle">✦</div>
                  <div className="hero__card"><span className="hero__card-icon">♫</span><span className="hero__card-label">SONIDO INMERSIVO</span><strong>Subí el volumen.</strong></div>
                  <span className="hero__floating hero__floating--top">✳</span><span className="hero__floating hero__floating--bottom">✦</span>
                </div>
              </section>
            )} />
            <Route path="productos" element={<ItemListContainer />} />
            <Route path="producto/:id" element={<ProductoDetail />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="*" element={<h2>Página no encontrada</h2>} />
          </Route>
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
