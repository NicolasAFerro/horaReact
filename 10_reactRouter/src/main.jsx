import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

//configuração do react router
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from 'react-router-dom';

//1´configurando router
import Contact from './routes/Contact.jsx';

//2 router error
import ErrorPage from './routes/ErrorPage.jsx';

//3 componente base
import Home from './routes/Home.jsx';

//7- rota dinamica
import Product from './routes/Product.jsx';

//8 nested route
import Info from './routes/Info.jsx';

//9 search params
import Search from './routes/Search.jsx';
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
      //rota dinamica
      {
        path: 'products/:id',
        element: <Product />,
        errorElement: <ErrorPage />,
      },
      //nested router
      {
        path: 'products/:id/info',
        element: <Info />,
        errorElement: <ErrorPage />,
      },
      //searchParams
      {
        path: 'search',
        element: <Search />,
        errorElement: <ErrorPage />,
      },
      //navigate, quando a página deixou de existir
      {
        path: 'teste',
        element: <Navigate to='/' />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*  <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
