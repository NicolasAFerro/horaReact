import React, { useState } from "react";

function ConditionalRender() {
  const x = true;
  const [numero, setNumero] = useState(10);

  const trocarNumero = () => {
    setNumero((prevNumero) => (prevNumero === 10 ? 11 : 10));
  };

  return (
    <div>
      <h3>Render Condicional</h3>

      <button onClick={trocarNumero}>Trocar Número: {numero}</button>

      <p>{numero}</p>

      {x && <p>Se x for true, sim!</p>}
    </div>
  );
}

export default ConditionalRender;
