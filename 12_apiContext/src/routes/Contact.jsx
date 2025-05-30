import React from 'react';
/* //6 importa o hook useContext que serve para consumir o contexto
import { useContext } from 'react';
//7 importa o contexto também
import { CounterContext } from '../context/CounterContext'; */

// 10 refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';
export default function Contact() {
  /*  const { counter } = useContext(CounterContext); */
  const { counter, setCounter } = useCounterContext();
  return (
    <div>
      <h1>Contact</h1>
      <p>valor do counter: {counter}</p>
    </div>
  );
}
