import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
//configuração do react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//3-importa o provedor do contexto
import { CounterContextProvider } from './context/CounterContext.jsx';

// 12 contexto mais complexo com reducer
import { TitleColorContextProvider } from './context/TitleColorContext.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    // componente base
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*  <App /> */}
    {/* 5-encapsula a aplicação */}
    <CounterContextProvider>
      <TitleColorContextProvider>
        <RouterProvider router={router} />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>,
);
