import React from "react";
import { useState } from "react";
function ListRender() {
  const [list] = useState(["Nicolas", "Gabi", "maria"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Nicolas", age: 26 },
    { id: 2, name: "Gabi", age: 27 },
    { id: 3, name: "Maria", age: 28 },
  ]);
  function deleteRandom() {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  }
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
      <h3>Previous State</h3>
      <button onClick={deleteRandom}>Delete random on list</button>
    </div>
  );
}

export default ListRender;
