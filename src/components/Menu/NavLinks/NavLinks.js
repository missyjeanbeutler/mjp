import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavLinks(props) {
  return (
    <div className='menu'>
      <NavLink activeClassName="menu_selected" 
          onClick={props.close} exact to='/'><h3>HOME</h3></NavLink>
      <NavLink activeClassName="menu_selected" 
          onClick={props.close} to='/gallery/oceans'><h3>OCEANS</h3></NavLink>
      <NavLink activeClassName="menu_selected" 
          onClick={props.close} to='/gallery/mountains'><h3>MOUNTAINS</h3></NavLink>
      <NavLink activeClassName="menu_selected" 
          onClick={props.close} to='/gallery/polaroids'><h3>POLAROIDS</h3></NavLink>
      <NavLink activeClassName="menu_selected" 
          onClick={props.close} to='/love'><h3>LOVE</h3></NavLink>
      <NavLink activeClassName="menu_selected" 
          onClick={props.close} to='/pricing'><h3>PRICING</h3></NavLink> 
      <NavLink activeClassName="menu_selected" 
          onClick={props.close} to='/contact'><h3>CONTACT</h3></NavLink>
    </div>
  )
}