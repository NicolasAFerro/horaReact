# React

npm create vite@latest

para react router:
npm install json-server

## Introdução

É baseado em SPA (single page application), no qual tem uma única página que vai mudando seu conteúdo através de eventos. Mudança de estados da página.

Deixar a página genérica através dos componentes.

Todo projeto React é um projeto Node.

LTS (long-term-support)

**Estrutura Base do REACT**

- `node_modules`: dependências do projeto. Não altera códigos dentro dela. Fica só a referência, é incluída no `.gitignore`.
- `src`: código da aplicação
  - `src/index.js` ou `src/main.js`: arquivo que importa para o navegador e coloca o React para rodar.
    - Aqui é onde configura as rotas.
  - `src/App.js`: componente principal da aplicação.
- package.json: import das dependências do projeto que está em node modules
- **index.css: CSS A NIVEL GLOBAL DA APLICAÇÃO**
- APP.css- css a nivel de componente

npm create vite@latest

## Fundamentos

- atalho para criar o componetne react: rfce

Um Componente é uma função;
camelCase: FirstComponent.jsx  
o jsx pode ter apenas um componente pai, então encapsula numa div e resolve esse problema

Meu Componente:

```
function FirstComponent() {
  //to retornando um objeto
  return (
    <div>
      <p>primeiro componentes</p>
    </div>
  );
}

export default FirstComponent;
```

Templante expression

```
function TemplateExpression() {
  const name = "Nicolas";
  const obj1 = {
    age: 15,
    job: "job",
  };
  return (
    <div>
      <p> a soma é: {2 + 2}</p>
      <p>{name}</p>

      <p>{obj1.age}</p>
      <p>{obj1.job}</p>
    </div>
  );
}

export default TemplateExpression;

```

Hierarquia de Componentes

- Um componente pode ter só um pai;

Eventos

```
import React from "react";

function Events() {
  let count = 0;
  const logicaComplexa = (e) => {
    console.log(e);
    console.log("Cliquei aqui" + count);
    count += 1;
  };
  return (
    <div>
      <button onClick={logicaComplexa}>Clique aqui</button>
    </div>
  );
}

export default Events;
```

Funções também podem retornar um jsx

```
import React from "react";
import RenderComponent from "./RenderComponent";

function Events() {
  let count = 0;
  const logicaComplexa = (e) => {
    console.log(e);
    console.log("Cliquei aqui" + count);
    count += 1;
  };
  //função de renderização
  const renderSomeThing = (x) => {
    if (x) return <h4>Par</h4>;
    else return <h4>impar</h4>;
  };
  return (
    <div>
      <button onClick={logicaComplexa}>Clique aqui</button>

      {/*Só chamar diretor como prop */}
      {renderSomeThing(true)}
      {renderSomeThing(false)}
    </div>
  );
}

export default Events;
```

## Avançando...

Importando imagens

```
import "./App.css";

//imagem em assets
import night from "./assets/night.jpg";
function App() {
  return (
    <div>
      <h1>Avanc</h1>;{/*Inserundo imagens */}
      <h2>Imagem public</h2>
      <img src="/img.jpg" alt="alguma imagem" />
      <h2>imagens assets</h2>
      <img src={night} alt="" />
    </div>
  );
}

export default App;
```

## **HOOKS**

- recursos do react que tem diversas funções
- precisam ser importados
- sempre começam com a palavra **use**
- useState;useEffect; useCallback
- Podemos Criar os nossos

- Sempre estar no topo da função; pois é como se o react criasse uma função e jogasse tudo como argumento (aquela fila dele), estão não pode usar hook dentro de if, que pode dar uma bugada

**useState**

- Gerenciar Estado: Getter e Setter  
  isso aqui é basicamente uma propriedade do objeto.

```
public class MeuComponente{
  private int number;

  setNumber(int x){
    number=x}
}
```

Agora no react a mesma coisa de cima

```
function MeuComponente(){
//Nome da Variavel, Setter, = useState(valorInicial)
const [number, setNumber] = useState(15);
  return(...)

}
```

posso colcoar uma lógica no ser também

```
function App(){
  const [number, setNumber]=useState(()=>{
    return 1+1 //ou qualquer lógica aqui
  })

  return <div><div/>
}

```

Desenvolvendo o Uso do useState

```
import React from "react";

import { useState } from "react";
function Data() {
  let soma = 10;

  //isso aqui é basicamente uma propriedade do objeto.
  //private int number; setNumber(int x){number=x}
  //Nome da Variavel, Setter, = useState(valorInicial)
  const [number, setNumber] = useState(15);
  return (
    <div>
      <h3>Soma</h3>
      <p>{soma}</p>
      <button onClick={() => (soma = 15)} style={{ backgroundColor: "orange" }}>
        soma=15
      </button>
      <h3>number</h3>
      <p>{number}</p>
      <button
        onClick={() => setNumber(number % 2 === 0 ? 17 : 20)}
        style={{ backgroundColor: "orange" }}
      ></button>
    </div>
  );
}

export default Data;

```

Renderizar Lista: O react Precisa sempre de um key/id

Previous State: O react é um garçom, então ele anota todos
os seus pedidos de mudança de estado em uma fila, para depois processar e rederizar. Se tentar fazer

```
const [number, setNumber] = useState(0);
setNumber(number + 1);

 o valor de number não foi atualizado ainda na fila, Então vale zero
 pois as chamadas são assincronas
```

Se voce fizer

```
setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
```

Então por que existe esse segundo jeito?
Porque às vezes o contador pode estar desatualizado, principalmente se várias atualizações estiverem acontecendo quase ao mesmo tempo (como em cliques rápidos ou loops). React pode agrupar atualizações para otimizar desempenho, e aí o contador que você vê no momento pode não ser o valor real mais atual.

A forma funcional garante que você sempre use o valor mais recente do estado, mesmo se houver várias atualizações pendentes.

```
import React from "react";
import { useState } from "react";
function ListRender() {
  const [list] = useState(["Nicolas", "Gabi", "maria"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Nicolas", age: 26 },
    { id: 2, name: "Gabi", age: 27 },
    { id: 3, name: "Maria", age: 28 },
  ]);
  function deleteRandom() {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  }
  return (
    <div>
      <h3>ListRender</h3>
      <ul>
        {/*se fizer com parentesis da erro aqui,
        tem que ser com tres pares de chave
         */}
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div>
        <p>UserList</p>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </div>
      <h3>Previous State</h3>
      <button onClick={deleteRandom}>Delete random on list</button>
    </div>
  );
}

export default ListRender;


```

**Renderização condicional**

é mais utilizado o && do que o ternario inline

```
import React, { useState } from "react";

function ConditionalRender() {
  const x = true;
  const [numero, setNumero] = useState(10);

  const trocarNumero = () => {
    setNumero((prevNumero) => (prevNumero === 10 ? 11 : 10));
  };

  return (
    <div>
      <h3>Render Condicional</h3>

      <button onClick={trocarNumero}>Trocar Número: {numero}</button>

      <p>{numero}</p>

      {x && <p>Se x for true, sim!</p>}
    </div>
  );
}

export default ConditionalRender;

```

**Props**

da para fazer um polimorfismo em tempo de execução

```
import React from "react";

function ShowUserName(props) {
  return (
    <div>
      <h2>Nome do usuario é {props.name}</h2>
    </div>
  );
}

export default ShowUserName;

```

também da para fazer destruturado

```
import React from "react";

/* toda propriedade que não for uma string, passa como obj */
/* <CarDetails brand="Fiat" km={331} color="vermelho" /> */

function CarDetails({ brand, km, color }) {
  return (
    <div>
      <h2>detales do carro</h2>
      <ul>
        <li>marca:{brand}</li>
        <li>km:{km}</li>
        <li>cor:{color}</li>
      </ul>
    </div>
  );
}

export default CarDetails;
```

**Loop**

```
{cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
        />
      ))}
```

**Fragments**
é um agrupamento para retornar mais de um elemento
no html do seu componente

```
import React from "react";

function Fragments() {
  return (
    <>
      <div>
        <h2>Temos dois elementos</h2>
      </div>
      <div>esse aqui também é um elemento</div>
    </>
  );
}

export default Fragments;


```

**Children**
passar as props dentro do componente,

```
import React from "react";

function Container({ children }) {
  return (
    <div>
      <h6>Conteudo do componente pai: {children}</h6>
    </div>
  );
}

export default Container;

```

ai chamando no App.jsx fica assim:

```
<Container>Alguma coisa</Container>
```

**Funções Através de Props**

```
// <ExecuteFunction myFunction={showMessage} />
function ExecuteFunction({ myFunction }) {
  return (
    <div>
      <button onClick={myFunction}>Clique ExecuteFunction</button>
    </div>
  );
}

export default ExecuteFunction;

```

**State Lift**  
do componente filho para o pai

## CSS

Para não vazar o css para os outros componentes
faz um arquivo MyComponent.module.css e importa ele como objeto

```
import React from 'react'
import classes from "./Title.module.css"
function Title() {
  return (
    <div><h1 className={classes.title}>Esse titulo está scroped</h1></div>
  )
}

export default Title
```

## IMC

Para fazer o Botão posso passar um evento qualquer como argumento;
Dai aquele componente pode executar o evento "global"

- capturar um evento e dar um set na dom

```
<label htmlFor="weight">Peso</label>
                <input type="text" name='weight' id='weight' placeholder='Exemplo 70,5'
                onChange={(e)=>setWeight(e.target.value)}
                value={weight} />
```

- passar evento como argumento; no caso action é o nome do argumento do tipo evento

```
 <Button id="clear-btn" action={clearForm} text="Limpar"/>
```

## Formulários

**o Envio deve ser pelo JS e Não pelo action**
Uma abordagem possivel se ficar muito handle padrão:

```
const handle = {
  nameChange: (e) => setName(e.target.value),
  emailChange: (e) => setEmail(e.target.value),
  submit: (e) => {
    e.preventDefault();
    console.log(name, email);
  },
};
```

**Edição:** Controlled Inputs - 6- pasta 6

Para fazer um polimorfismo em tempo de Execução é possivel atribuir o value do html com as possiveis props que venham de venham no useState. Mas se atentar que devemos colocar um "" casos ela não exista.

```
import React from 'react'
import './MyForm.css'
import { useState } from 'react'

type MyFormProps = {
  userName: string;
  userEmail: string;
};
function MyForm({userName , userEmail}:MyFormProps) {
  const [name,setName]=useState(userName);
  const [email,setEmail]= useState(userEmail);
  const [bio, setBio]=useState("");
  const [role, setRole]=useState("");

 function handleName (e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  //essa abordagem é possivel usar This, é uma melhor boa pratica
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    //ValidaçÃO
    //Envio
    console.log(bio,name,email,role);
    //Limpando o Formulário
    setName("");
    setEmail("");
    setBio("");
    setRole("");

  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName}
                /* {controlled Inputs} */
                value={name || ""}/>
            </div>
            {/* {label envolvendo o input} */}
            <label htmlFor="">
              <span>Email:</span>
              {/* {da para colocar o set Já no input} */}
            <input type="email" name='email' onChange={(e)=>{setEmail(e.target.value)}}
            /* {Controled Inputs} */
            value={email || ""}
            />
            </label>
              <label><span>Bio:</span>
              <textarea name="bio" placeholder='Descricao do usuarios' onChange={(e)=>{setBio(e.target.value)}}
                value={bio || ""}></textarea>
            </label>
            <label>
              <span>Função</span>
              <select name="role" onChange={(e)=>{setRole(e.target.value)}} value={role}>
                <option value="user">Usuário</option>
                <option value="adm">Administrador</option>
                <option value="editor">Editor</option>
              </select>
            </label>
            <input type="submit" />
        </form>


    </div>
  )
}

export default MyForm

```

## Requisições HTTP

**UseEffect**
Permite executar efeitos colaterais, como requisições, timers, manipulação do DOM, etc.

```
import { useEffect } from 'react';

useEffect(() => {
  console.log('Rodou o efeito!');
}, []);
```

O segundo parâmetro ([]) é a lista de dependências:
[] = roda uma vez só (componentDidMount); quando é montado em tela;
[variavel] = roda toda vez que variavel mudar
Sem o segundo parâmetro = roda toda renderização
Ele basicamente diz quando que o useEffect vai rodar

## **Comportamento de Ponteiro do useEffect**

```
 const handleSubmit = async (e)=>{
    e.preventDefault();
    const product={
      name,
      price,
    }
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
  }
```

**Estado de loading**
é basicamente um novo estado exportado

## REACT ROUTER

- Cada rota é uma página
- npm install json-server react-router-dom
- npm install json-server@0.17.0

**configuração**
precisa importar os componetes createBrowserRouter, RouterProvider,Route

- precisa instalar o react-router-dom;
- ir no main.jsx;
- importa os component;
- criar uma array de obj com seus paths
- substituir o <App/> por <RouterProvider />
- passar seu array como prop

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Contact from './routes/Contact.jsx'

const router = createBrowserRouter([
 {
   path:"/",
   element:<App />
 },
 {
   path:"contact",
   element:<Contact />
 }
])

createRoot(document.getElementById('root')).render(
 <StrictMode>
  {/*  <App /> */}
  <RouterProvider router={router}/>
 </StrictMode>,
)
```

**Criando o componente Base**
-define que o componente tenha a estrutura, ai reaproveita em tudo

- as configurações de páginas devem ser feitas da prop Chidren em main.jsx

```
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // componente base
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'contact',
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
```

- e no app.jsx

```
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <p>NavBAR</p>
      <Outlet />
      <p>footer</p>
    </div>
  );
}
```

**Links entre páginas**
usar o componente <LINK/> presente na biblioteca do react dom, que é basicamente
uma Tag <a>
**Rota dinâmica**

- Carregar os produtos de forma individual, que as caracteristicas mudam
  path=>product/:id
- toda rota dinâmica precisa estar declarada também no main,jsx

1- configura a roda no main

```
//rota dinamica
      {
        path: 'products/:id',
        element: <Product />,
        errorElement: <ErrorPage />,
      },
```

2- cria esse componente. Ver documentação react router dom;
use Paramns

```
import React from 'react';

import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const url = 'http://localhost:3000/products/' + id;
  const { data: product } = useFetch(url);

  if (!product) return <p>Carregando...</p>;
  return (
    <div>
      <p>Id do produto:{product.id}</p>
      <div>
        <h1>nome: {product.name}</h1>
        <h1>nome: {product.price}</h1>
      </div>
    </div>
  );
};

export default Product;

```

3- chama no home

```
<h1>Home</h1>
      <ul className='products'>
        {itens &&
          itens.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
```

- Nested Routes

```

//nested router
      {
        path: 'products/:id/info',
        element: <Info />,
        errorElement: <ErrorPage />,
      },
```

- Para deixar o navBAR

```
  const NavBar = () => {
  return (
  <div>
  {/\* <Link to='/'>Home</Link>

        <Link to='/contact'>Contatos</Link> */}
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to='/contact'>Contatos</NavLink>
      </div>

  );
  };
```

- **SearchParamns**
  1- faz o componente
  2- faz a rota no main
  3- cria a route

```
import React from 'react';

import { useFetch } from '../hooks/useFetch';
import { Link, useSearchParams } from 'react-router-dom';
const Search = () => {
  const [searchParamns] = useSearchParams();
  const url = 'http://localhost:3000/products?' + searchParamns;

  const { data: itens } = useFetch(url);
  return (
    <div>
      <h1>Resultados da pesquisa</h1>
      <ul className='products'>
        {itens &&
          itens.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
```

## REACT CONTEXT

é uma forma de armazenar uma variavel global da aplicação.
compartilhando um estado de logado por exemplo.
Com isso, minha classe não precisa receber parametros, é só acessar
diretamente a variavel, como se fosse um injeçãod e dependencia/singleton/associado

1° cria uma pasta context e cria um contexto:

```
import { createContext } from 'react'; //importa do react

export const QuizContext = createContext(); //instancia o contexto

//injeção de dependencia
//posso escolher todos os childrens ou componentes especificos
export const QuizProvider = ({ children }) => {
  const value = { name: 'quiz' };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

```

2° import no main e encapsula oq tu vai querer que acesse,
neste caso é global

```
import { QuizProvider } from '../context/quiz.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>,
);
```

3° acessando no componete que tu quer:

- tem que importar o contexto
- importar o useContext que acessa ele

```
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

export const Welcome = () => {
  const quizState = useContext(QuizContext);
  console.log(quizState);
  return (
    <div id='welcome'>
      <h2>Bem vindo</h2>
      <p>Clique no botão abaixo apra iniciar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt='inicio do quiz' />
    </div>
  );
};
```

**UseReducer**

é como vou alterar o estado e/ou contexto da aplicação;
useReducer é um hook usado para gerenciar estado complexo em componentes React, especialmente quando:
Há vários tipos de ações que afetam o estado.
O estado tem múltiplas propriedades.
Ou quando você quer manter a lógica de atualização separada.
Ele é uma alternativa ao useState, inspirada no padrão Reducer do Redux (e no conceito de State Machine).

```
const [estado, dispatch] = useReducer(reducer, estadoInicial);
```

- estado: o estado atual.
- dispatch: função para enviar ações.
- reducer: função que recebe o estado atual e uma ação, e retorna o novo estado.
- estadoInicial: o valor inicial do estado.
