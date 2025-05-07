import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const erro= useRouteError();
    console.log(`to aqui: ${erro.Message}`);
  return (
    <div><h1>erro: {erro.statusText}</h1><p>{erro.error.message}</p></div>
  )
}

export default ErrorPage