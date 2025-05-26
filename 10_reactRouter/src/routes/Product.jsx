import React from 'react';

import { useFetch } from '../hooks/useFetch';
import { useParams, Link } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const url = 'http://localhost:3000/products/' + id;
  const { data: product } = useFetch(url);

  if (!product) return <p>Carregando...</p>;
  return (
    <div>
      <p>Id do produto:{product.id}</p>
      <div>
        <h1>nome: {product.name}</h1>
        <h1>nome: {product.price}</h1>
        {/* nestedRouter */}
        <Link to={`/products/${id}/info`}>
          Mais Informações ainda sobre o produto
        </Link>
      </div>
    </div>
  );
};

export default Product;
