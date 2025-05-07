
import './App.css'
import { useState,useEffect} from 'react'
import { useFetch } from './hooks/useFetch';
function App() {
  const [products,setProducts]=useState([]); 
  //const url="http://localhost:3000/products"; 
  const url="";

/*   async function getData () { 
    const res= await fetch(url);
    const data=await res.json(); 
    setProducts(data);
  
  }
  useEffect(()=>{ 
    //ação de fetch

    getData();
  },[]) */

  //4 custom Hook
  const {data: items,httpConfig,loading,error} = useFetch(url);



  //envio de dados 
  const [name,setName]=useState(""); 
  const [price,setPrice]=useState("");
  const handleSubmit = async (e)=>{ 
    e.preventDefault(); 
    const product={ 
      name,
      price,
    }

    /* //chamando na unha
    //#region 
   
    ///post 
    const res = await fetch(url,{ 
      method:'POST', 
      headers:{ 
        "Content-Type":"application/json"
      }, 
      body: JSON.stringify(product),
    })
    //3 carregamento dinamico sem ter que fazer uma nova requisição: 
    const addedProduct= await res.json(); 
    //oq acontece aqui: Eu não posso simplesmente dar um push do final da lista.
    //pois a lista ainda está apontando para o mesmo lugar na memória, ai o react 
    //não "ouve"/"enxerga" a mudança para reenderizar o componente. Com isso tem que usar mais 
    //um espacinho em memória para criar uma nova lista e ele enxergar a mudança  e retorna  
    // o novo ponteiro para o setProducts. Acho meio merda. 
    // o React tem um garbageCollector que faz o free/dispose do array antigo.
    setProducts((prev)=>[...prev,addedProduct])
    //#endregion */

    //5 refatorando post 
    httpConfig(product,"POST");
    setName(""); 
    setPrice("");
  }

  return (
   <div className='app'>
    <h1>HTTP em React</h1> 
    {/* 6-loading */}  
    {loading && <p>Carregando</p>}
    {/* 7-error */} 
    {error && <p>{error}</p>}

    <ul>
     {/*  {products.map((product) => (
        <li key={product.id}>
          {product.name} - R$ {product.price}
        </li>
      ))} */} 
        {items && items.map((product) => (
        <li key={product.id}>
          {product.name} - R$ {product.price}
        </li>
      ))}
    </ul>
    <div className="add-product">
      <form onSubmit={handleSubmit} id='form-product'> 
        <label htmlFor="">
          <span>Nome</span>
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </label> 
        <label htmlFor="">
          <span>Preço</span>
          <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        </label>
        {/* <input type="submit" value="enviar" /> */} 
        {/* loading post */} 
        {loading && <input type="submit" disabled value="Aguarde" />} 
        {!loading && <input type="submit"  value="enviar" />}
      </form>
    </div>

   </div>
  )
}

export default App
