import { useContext } from 'react';

import { CounterContext } from '../context/CounterContext';

export default function ChangeCounter() {
  //o use context retorna um objeto, então tem que desestruturar com {}
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <h2>ChangeCounter</h2>
      <p>valor de counter= {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
}
