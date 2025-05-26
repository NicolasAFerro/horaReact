import React from 'react';

// carregamento de dados
import { useFetch } from '../hooks/useFetch';

//7- rota dinamica
import { Link } from 'react-router-dom';
function Home() {
  const url = 'http://localhost:3000/products';
  const { data: itens } = useFetch(url);
  return (
    <div>
      <h1>Home</h1>
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
}

export default Home;
