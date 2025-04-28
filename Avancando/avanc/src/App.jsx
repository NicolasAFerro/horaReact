import "./App.css";

//imagem em assets
import night from "./assets/night.jpg";

import Data from "./components/Data";
import ListRender from "./components/ListRender";
function App() {
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
    </div>
  );
}

export default App;
