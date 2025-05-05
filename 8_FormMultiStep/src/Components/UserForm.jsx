import React from "react";

function UserForm() {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite o seu nome"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="name">email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite o seu email"
          required
        />
      </div>
    </div>
  );
}

export default UserForm;
