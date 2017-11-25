import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <div className='menu_container'>
      <NavLink to='/'><h3>HOME</h3></NavLink>
      <NavLink to='/work'><h3>WORK</h3></NavLink>
      <NavLink to='/contact'><h3>CONTACT</h3></NavLink>
    </div>
  )
}