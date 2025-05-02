import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./App.css";
import UserForm from "./Components/UserForm";
import ReviewForm from "./Components/ReviewForm";
import Thanks from "./Components/Thanks";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];
  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua Avaliação</h2>
        <p>
          ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="div form-container">
        <p>etapas</p>
        <form action="">
          <div className="inputs-container"></div>

          <div className="actions">
            <button type="button">
              <span>Voltar</span>
              <GrFormPrevious />
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
