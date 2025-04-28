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

private int number; setNumber(int x){number=x}

Nome da Variavel, Setter, = useState(valorInicial)

const [number, setNumber] = useState(15);

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
``` 
import React from "react";
import { useState } from "react";
function ListRender() {
  const [list, setList] = useState(["Nicolas", "Gabi", "maria"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Nicolas", age: 26 },
    { id: 2, name: "Gabi", age: 27 },
    { id: 3, name: "Maria", age: 28 },
  ]);
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
    </div>
  );
}

export default ListRender;

```