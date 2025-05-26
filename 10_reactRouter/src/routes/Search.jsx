import React from 'react';

import { useFetch } from '../hooks/useFetch';
import { Link, useSearchParams } from 'react-router-dom';
const Search = () => {
  const [searchParamns] = useSearchParams();
  const url = 'http://localhost:3000/products?' + searchParamns;

  const { data: itens } = useFetch(url);
  return (
    <div>
      <h1>Resultados da pesquisa</h1>
      <ul className='products'>
        {itens &&
          itens.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
