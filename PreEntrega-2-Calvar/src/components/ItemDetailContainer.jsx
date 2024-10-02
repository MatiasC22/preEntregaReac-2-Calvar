import { useEffect, useState } from 'react';
import { getProducts } from '../asyncMock.js';
import ItemListContainer from './ItemListContainer.jsx';

export default function ItemDetailContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  return (
    <>
      <section style={{ display: 'flex', gap: 10 }}>
        {products.map((product) => (
          <ItemListContainer key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

