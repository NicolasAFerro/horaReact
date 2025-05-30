import React from 'react';

//6 importa o hook useContext que serve para consumir o contexto
import { useContext } from 'react';
//7 importa o contexto também
import { CounterContext } from '../context/CounterContext';

/* 9 usando pelo componente */
import ChangeCounter from '../components/ChangeCounter';

//14 utilizando o hook mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

export default function Home() {
  //8-ativar o hook
  const { counter } = useContext(CounterContext);

  const { color, dispathc } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>home</h1>
      <p>valor do countador= {counter}</p>
      {/* chamou o context no componente */}
      <div>
        <ChangeCounter />
      </div>
      {/* 15 alterando o contexto Complexo */}
      <div>
        <button onClick={() => dispathc({ type: 'RED' })}>RED</button>
        <button onClick={() => dispathc({ type: 'BLUE' })}>BLUE</button>
      </div>
    </div>
  );
}
