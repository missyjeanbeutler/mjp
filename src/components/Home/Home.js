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
  // {
  //   style: 'home_polaroids',
  //   title: 'POLAROIDS',
  //   url: '/gallery/polaroids'
  // },
  // {
  //   style: 'home_travel',
  //   title: 'TRAVEL',
  //   url: '/gallery/travel'
  // }
]

export default function Home() {

  const galleriesJSX = galleries.map((e, i) => (
    <div key={i} className={'home_gallery ' + e.style}>
      <div>
        <h2>{e.title}</h2>
        <NavLink to={e.url}><p>see more</p></NavLink>
      </div>
    </div>
  ))

  return (
    <div>
      <div className='home_splash'/>
      <div className='home_header'>
        <h1>GALLERIES</h1>
      </div>
      <main className='home_galleriesContainer'>
        { galleriesJSX }
      </main>
    </div>
  )
}