import React from "react";
import RenderComponent from "./RenderComponent";

function Events() {
  let count = 0;
  const logicaComplexa = (e) => {
    console.log(e);
    console.log("Cliquei aqui" + count);
    count += 1;
  };
  //função de renderização
  const renderSomeThing = (x) => {
    if (x) return <h4>Par</h4>;
    else return <h4>impar</h4>;
  };
  return (
    <div>
      <button onClick={logicaComplexa}>Clique aqui</button>

      {/*Só chamar diretor como prop */}
      {renderSomeThing(true)}
      {renderSomeThing(false)}
    </div>
  );
}

export default Events;
