import React from "react";
import { useState } from "react";
function ListRender() {
  const [list, setList] = useState(["Nicolas", "Gabi", "maria"]);
  return (
    <div>
      <h3>ListRender</h3>
      <ul>
        {/*se fizer com parentesis da erro aqui, 
        tem que ser com tres pares de chave
         */}
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListRender;
