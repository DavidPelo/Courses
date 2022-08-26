import React from 'react'
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink onClick={props.onClick} to="/">ALL USERS</NavLink>
      </li>
      <li>
        <NavLink onClick={props.onClick} to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink onClick={props.onClick} to="/places/new">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink onClick={props.onClick} to="auth/">LOGIN</NavLink>
      </li>
    </ul>
  )
}

export default NavLinks