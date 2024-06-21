// src/components/layout/Nav.js

import React from 'react';
import { NavLink } from "react-router-dom";
import '../../Styles/Nav.css'; 

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'activo' : '')}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/servicios" 
              className={({ isActive }) => (isActive ? 'activo' : '')}
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/nosotros" 
              className={({ isActive }) => (isActive ? 'activo' : '')}
            >
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/novedades" 
              className={({ isActive }) => (isActive ? 'activo' : '')}
            >
              Novedades
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/galeria" 
              className={({ isActive }) => (isActive ? 'activo' : '')}
            >
              Galería
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contacto" 
              className={({ isActive }) => (isActive ? 'activo' : '')}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
