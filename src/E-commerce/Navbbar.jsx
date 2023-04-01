import { React, useContext } from 'react'
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { CartContext } from './Context_Api/Context';
const NavBar = () => {
  
  const GlobalStat = useContext(CartContext);
  const data = GlobalStat.state
  return (
    
          <div className="nav">
      <NavLink to="/">home</NavLink>
      <NavLink to="/cart">cart {data.length }</NavLink>
    </div>
  )
}

export default NavBar