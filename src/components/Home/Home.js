import React from 'react';
import { NavLink } from 'react-router-dom';

const galleries = [
  {
    style: 'home_oceans',
    title: 'OCEANS',
    url: '/gallery/oceans'
  },
  {
    style: 'home_mountains',
    title: 'MOUNTAINS',
    url: '/gallery/mountains'
  },
  {
    style: 'home_polaroids',
    title: 'POLAROIDS',
    url: '/gallery/polaroids'
  },
  {
    style: 'home_travel',
    title: 'TRAVEL',
    url: '/gallery/travel'
  }
]

export default function Home() {

  const galleriesJSX = galleries.map((e, i) => (
    <NavLink key={i} to={e.url} className='home_gallery'>
      <div className={e.style}>
        <div>
          <h2>{e.title}</h2>
          <p>see more</p>
        </div>
      </div>
    </NavLink>
  ))

  return (
    <div className='home_splash'>
      <div className='home_header'>
        <h1>MISSY J PHOTO</h1>
        <p>Missy is a Utah based photographer that focuses on landscapes and experiences.</p>
        <div/>
      </div>
      <main className='home_galleriesContainer'>
        { galleriesJSX }
      </main>
    </div>
  )
}