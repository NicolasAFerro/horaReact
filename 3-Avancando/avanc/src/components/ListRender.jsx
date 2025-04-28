import React from "react";
import { useState } from "react";
function ListRender() {
  const [list, setList] = useState(["Nicolas", "Gabi", "maria"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Nicolas", age: 26 },
    { id: 2, name: "Gabi", age: 27 },
    { id: 3, name: "Maria", age: 28 },
  ]);
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
      <div>
        <p>UserList</p>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </div>
    </div>
  );
}

export default ListRender;
