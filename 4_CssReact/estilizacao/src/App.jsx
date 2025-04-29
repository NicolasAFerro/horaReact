
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';


function App() {
  
  const n=74;
  const redTitle=true
  return (
    <>
      <h1>Css no React</h1>
      <MyComponent />
      <p>esse ta vazando</p>

      <p style={{color:"blue", padding:"25px", borderTop:"1px solid pink"}}>estilo Inline</p> 


      <h2 style={n > 10? {color:"purple"}:{color:"yellow"}}>CSS DINAMICO</h2>

      <h3 className={redTitle ? "red-title" : "title"}>classes dinamicas</h3>

      <Title />
    </>
  )
}

export default App
