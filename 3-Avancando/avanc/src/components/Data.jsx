import React from "react";

import { useState } from "react";
function Data() {
  let soma = 10;

  //isso aqui é basicamente uma propriedade do objeto.
  //private int number; setNumber(int x){number=x}
  //Nome da Variavel, Setter, = useState(valorInicial)
  const [number, setNumber] = useState(15);
  return (
    <div>
      <h3>Soma</h3>
      <p>{soma}</p>
      <button onClick={() => (soma = 15)} style={{ backgroundColor: "orange" }}>
        soma=15
      </button>
      <h3>number</h3>
      <p>{number}</p>
      <button
        onClick={() => setNumber(number % 2 === 0 ? 17 : 20)}
        style={{ backgroundColor: "orange" }}
      ></button>
    </div>
  );
}

export default Data;
