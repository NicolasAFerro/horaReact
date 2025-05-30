//13 importando o contexto para um hook
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (!context) {
    console.log('contexto não existe');
    return;
  }
  console.log(context);

  return context;
};
