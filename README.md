# React

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

**HOOKS**

- recursos do react que tem diversas funções
- precisam ser importados
- sempre começam com a palavra **use**
- useState;useEffect; useCallback
- Podemos Criar os nossos

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
