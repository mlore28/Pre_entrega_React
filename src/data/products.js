export const getProducts = async (signal) => {
  const productsUrl = new URL(`${import.meta.env.BASE_URL}productos.json`, window.location.href);
  const response = await fetch(productsUrl, { signal });

  if (!response.ok) {
    throw new Error(`No se pudieron cargar los productos (${response.status}).`);
  }

  const products = await response.json();
  if (!Array.isArray(products)) {
    throw new Error('La respuesta de productos tiene un formato inválido.');
  }

  if (products.length !== 3) {
    throw new Error(`El catálogo debe contener 3 productos; se recibieron ${products.length}.`);
  }

  return products;
};
