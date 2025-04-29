import React from "react";

function ShowUserName(props) {
  return (
    <div>
      <h2>Nome do usuario é {props.name}</h2>
    </div>
  );
}

export default ShowUserName;
