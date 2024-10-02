import React, { useEffect, useState } from 'react';

import { getProducts} from '../asyncMock.js'; 

import ProductCard from './ProductCard';

export default function ItemListContainer() {

    const[products, setProducts]= useState([]);

    useEffect(()=> {
        getProducts.then(data => setProducts(data));
    },[]);

  return (
    <>
      <section>
        {products.map(product => <ProductCard product={product}></ProductCard>)}
      </section>
    </>
  );
}