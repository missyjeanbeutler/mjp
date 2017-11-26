import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <div className='menu_container'>
      <div className='menu'>
        <NavLink activeClassName='selected' exact to='/'><h2>HOME</h2></NavLink>
        <NavLink activeClassName='selected' to='/work'><h2>WORK</h2></NavLink>
        <NavLink activeClassName='selected' to='/contact'><h2>CONTACT</h2></NavLink>
      </div>
    </div>
  )
}