import { Link } from 'react-router-dom';

export const Item = ({ id, nombre, precio, imagen, categoria, etiqueta }) => {
  const imageUrl = new URL(import.meta.env.BASE_URL + imagen, window.location.href).href;

  return (
    <article className="product-card">
      <Link className="product-card__image-link" to={'/producto/' + id} aria-label={'Ver ' + nombre}>
        <div className="product-card__image">
          <span className="product-card__badge">{etiqueta}</span>
          <img src={imageUrl} alt={nombre} />
          <span className="product-card__image-arrow" aria-hidden="true">↗</span>
        </div>
      </Link>
      <div className="product-card__content">
        <span className="product-card__category">{categoria}</span>
        <h3>{nombre}</h3>
        <div className="product-card__bottom">
          <p className="product-card__price"><span>Precio final</span>{'$' + precio.toLocaleString('es-AR')}</p>
          <Link className="product-card__link" to={'/producto/' + id} aria-label={'Ver detalle de ' + nombre}>Ver producto <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </article>
  );
};
