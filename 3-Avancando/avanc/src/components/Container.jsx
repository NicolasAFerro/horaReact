import React from "react";

function Container({ children }) {
  return (
    <div>
      <h6>Conteudo do componente pai: {children}</h6>
    </div>
  );
}

export default Container;
