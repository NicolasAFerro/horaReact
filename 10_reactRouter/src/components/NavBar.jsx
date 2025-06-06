import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
  return (
    <div>
      {/*       <Link to='/'>Home</Link>

      <Link to='/contact'>Contatos</Link> */}
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to='/contact'>Contatos</NavLink>
    </div>
  );
};

export default NavBar;
