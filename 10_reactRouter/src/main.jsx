import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

//1´configurando router
import Contact from './routes/Contact.jsx'

//2 router error
import ErrorPage from './routes/ErrorPage.jsx'


const router = createBrowserRouter([ 
  { 
    path:"/", 
    element:<App />,
    errorElement:<ErrorPage />
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
