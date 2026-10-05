export const getProducts = async (signal) => {
  const response = await fetch('/productos.json', { signal });

  if (!response.ok) {
    throw new Error(`No se pudieron cargar los productos (${response.status}).`);
  }

  const products = await response.json();
  if (!Array.isArray(products)) {
    throw new Error('La respuesta de productos tiene un formato inválido.');
  }

  return products;
};
