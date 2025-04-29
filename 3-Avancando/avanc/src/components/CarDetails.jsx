import React from "react";

/* toda propriedade que não for uma string, passa como obj */
/* <CarDetails brand="Fiat" km={331} color="vermelho" /> */

function CarDetails({ brand, km, color }) {
  return (
    <div>
      <h2>detales do carro</h2>
      <ul>
        <li>marca:{brand}</li>
        <li>km:{km}</li>
        <li>cor:{color}</li>
      </ul>
    </div>
  );
}

export default CarDetails;
