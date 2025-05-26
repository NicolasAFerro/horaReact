import './App.css';

import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <SearchForm />
      <Outlet />
      <p>footer</p>
    </div>
  );
}

export default App;
