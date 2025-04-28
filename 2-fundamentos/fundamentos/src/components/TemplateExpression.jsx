import MyComponent from "./MyComponent";

function TemplateExpression() {
  const name = "Nicolas";
  const obj1 = {
    age: 15,
    job: "job",
  };
  return (
    <div>
      <h2>{"Template"}</h2>
      <p> a soma é: {2 + 2}</p>
      <p>{name}</p>

      <p>{obj1.age}</p>
      <p>{obj1.job}</p>
      <h3>
        Importando o My componente: <MyComponent></MyComponent>
      </h3>
    </div>
  );
}

export default TemplateExpression;
