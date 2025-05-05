import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./App.css";
import UserForm from "./Components/UserForm";
import ReviewForm from "./Components/ReviewForm";
import Thanks from "./Components/Thanks";
import { useState } from "react";
import Steps from "./Components/Steps";
import { BsEmojiLaughing } from "react-icons/bs";

const formTemplate={ 
  name:"", 
  email:"", 
  review:"", 
  comment:"",
}
function App() {
  const [data,setData]=useState(formTemplate);
  
  const [indexComponent, setIndexComponent] = useState(0);

  const updateFieldHandler=(key,value)=>{ 
    setData((prev)=>{ 
      return {...prev,[key]:value}
    })
  }
  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <Thanks data={data}/>
  ];
  // Avança para o próximo passo ao submeter o formulário
  function handleSubmit(e) {
    e.preventDefault(); // evita o reload da página

    // Somente avança se não for o último passo
    if (indexComponent < formComponents.length - 1) {
      setIndexComponent((prev) => prev + 1);
    }
  }

  function handleBack() {
    if (indexComponent > 0) {
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
      <div className="form-container">
        <Steps currentStep={indexComponent} />

        <form onSubmit={handleSubmit}>
          <div className="inputs-container">
            {formComponents[indexComponent]}
          </div>

          <div className="actions">
            <button
              type="button"
              id="btnPrevious"
              onClick={handleBack}
              disabled={indexComponent === 0}
            >
              <span>Voltar</span>
              <GrFormPrevious />
            </button>

            {indexComponent < formComponents.length - 1 ? (
              <button type="submit" id="btnNext">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button" disabled>
                Finalizado
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
