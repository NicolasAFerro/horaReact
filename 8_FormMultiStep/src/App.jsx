import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./App.css";
import UserForm from "./Components/UserForm";
import ReviewForm from "./Components/ReviewForm";
import Thanks from "./Components/Thanks";
import { useState } from "react";
import Steps from "./Components/Steps";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];
  const [indexComponent, setIndexComponent] = useState(0);

  //problema da variavel contadora do react. Ele Armazena na fila dele para depois processar;
  //sempre que um elemento é rendereizado, o index volta para 0; pois
  //"Começa a função de novo"
  function handleFormStep(direction) {
    if (direction === "next" && indexComponent < formComponents.length - 1) {
      setIndexComponent((prev) => prev + 1);
    } else if (direction === "previous" && indexComponent > 0) {
      setIndexComponent((prev) => prev - 1);
    }
  }

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua Avaliação</h2>
        <p>
          Ficamos felizes com a sua compra. Utilize o formulário abaixo para
          avaliar o produto.
        </p>
      </div>
      <div className="div form-container">
        <Steps currentStep={indexComponent} />
        <form>
          <div className="inputs-container">
            {formComponents[indexComponent]}
          </div>

          <div className="actions">
            <button
              type="button"
              id="btnPrevious"
              onClick={() => handleFormStep("previous")}
              disabled={indexComponent === 0}
            >
              <span>Voltar</span>
              <GrFormPrevious />
            </button>
            <button
              type="button"
              id="btnNext"
              onClick={() => handleFormStep("next")}
              disabled={indexComponent === formComponents.length - 1}
            >
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
