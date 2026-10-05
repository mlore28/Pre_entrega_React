import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import { Layout } from './components/Layout';
import { ItemListContainer } from './components/ItemListContainer';
import { ProductoDetail } from './pages/ProductoDetail';
import { Carrito } from './pages/Carrito';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<section><h2>Bienvenido a nuestra tienda online</h2><p>Encuentra los productos ideales para vos.</p><Link to="/productos">Explorar productos</Link></section>} />
            <Route path="productos" element={<ItemListContainer />} />
            <Route path="producto/:id" element={<ProductoDetail />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="*" element={<h2>Página no encontrada</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
