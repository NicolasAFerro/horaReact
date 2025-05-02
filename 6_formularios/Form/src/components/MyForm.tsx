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

 function handleName (e: React.ChangeEvent<HTMLInputElement>) { 
    setName(e.target.value);    
  }
  //essa abordagem é possivel usar This, é uma melhor boa pratica
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{ 
    e.preventDefault();

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
            <input type="submit" />
        </form>


    </div>
  )
}

export default MyForm