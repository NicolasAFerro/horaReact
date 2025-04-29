import "./App.css";

//imagem em assets
import night from "./assets/night.jpg";
import ConditionalRender from "./components/ConditionalRender";

import Data from "./components/Data";
import ListRender from "./components/ListRender";
import ShowUserName from "./components/ShowUserName";

//9- desestruturando props
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import { useState } from "react";

const cars = [
  { id: 1, brand: "Ferrari", km: 33, color: "vermelho" },
  { id: 2, brand: "FORD", km: 888, color: "azul" },
  { id: 3, brand: "KIA", km: 999, color: "verde" },
];
function App() {
  function showMessage() {
    alert("Execute Function");
  }
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  return (
    <div>
      <h1>Avanc</h1>;{/*Inserundo imagens */}
      <h2>Imagem public</h2>
      <img src="/img.jpg" alt="alguma imagem" />
      <h2>imagens assets</h2>
      <img src={night} alt="" />
      <h2>UseState</h2>
      <Data />
      <h2>Lista</h2>
      <ListRender />
      <br /> <br /> <br /> <br />
      <ConditionalRender />
      <br /> <br /> <br /> <br />
      <ShowUserName name="Nicolas" />
      {/* toda propriedade que não for uma string, passa como obj */}
      <CarDetails brand="Fiat" km={331} color="vermelho" />
      {/* reaproveitamento de componentes */}
      <CarDetails brand="volto" km={666} color="branco" />
      <CarDetails brand="bmw" km={777} color="Azul" />
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
        />
      ))}
      <br />
      <br />
      <Fragments />
      {/* Aqui tem que abrir e fechar igual html, o resto não precisa */}
      <Container>Alguma coisa</Container>
      <ExecuteFunction myFunction={showMessage} />
    </div>
  );
}

export default App;
