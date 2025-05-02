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