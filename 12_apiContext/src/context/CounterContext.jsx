import React, { useState } from 'react';

//1 importa o context e export
import { createContext } from 'react';

export const CounterContext = createContext();

//2 provider vai delimitar o escopo do contexto
//quais componentes vão ter acesso aqueles dados
//componete que fornece provider aos dados do contexto
//=> depois de fazer isso vai no main
export const CounterContextProvider = ({ children }) => {
  //aqui tem alguma coisa que eu controlo, que é o valor de contexto
  const [counter, setCounter] = useState(5);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
