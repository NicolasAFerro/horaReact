import "./App.css";
import Events from "./components/Events";
import FirstComponent from "./components/FirstComponent";
import MyComponent from "./components/MyComponent";
import TemplateExpression from "./components/TemplateExpression";

function App() {
  return (
    <div>
      <h1>Fundamento</h1>
      <FirstComponent></FirstComponent>
      <TemplateExpression />
      <MyComponent></MyComponent>
      <Events />
    </div>
  );
}

export default App;
