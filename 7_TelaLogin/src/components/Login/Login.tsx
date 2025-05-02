import './Login.css'
import { FaUser,FaLock } from 'react-icons/fa'
import { useState } from 'react'


function Login() {

    const [email,setEmail]=useState(""); 
    const [passaword, setPassword]=useState(""); 

    const handleSubmit =(e)=>{  
        e.preventDefault();
        console.log(email,passaword)


    }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}> 
            <h1>Acesse o Sistema</h1>
            <div className='input-field'> 
                <input type="email" placeholder='E-mail' onChange={(e)=>{setEmail(e.target.value)}}/>
                <FaUser className='icon' />
            </div> 
            <div className='input-field'> 
                <input type="password" placeholder='Senha' onChange={(e)=>{setPassword(e.target.value)}} />
                <FaLock className='icon' />
            </div>
            <div className="recall-forget"><label htmlFor=""> 
                <input type="checkBox" />Lembre de mim</label> 
                <a href="#">Esqueceu a Senha?</a>
            </div>
            <button>Entrar</button> 
            <div className='singup-link'>
                <p>Não tem uma conta? <a href="">Registrar</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login