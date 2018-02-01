import React from 'react';
import { NavLink } from 'react-router-dom';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';

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
      <Transition
        component={false}
        enter={{ opacity: spring(1, {stiffness: 40, damping: 20}) }}
        leave={{ opacity: 0 }}>
        <div className={e.style} key={i}>
          <div>
            <h2>{e.title}</h2>
            <p>see more</p>
          </div>
        </div>
      </Transition>
    </NavLink>
  ))

  return (
    <div className='home_splash'>
      <Transition
        component={false}
        enter={{ 
          opacity: spring(1, {stiffness: 40, damping: 20}), 
          translateY: spring(0, {stiffness: 40, damping: 20}) }}
        leave={{ opacity: 0, translateY: 30 }}>
          <div className='home_header' key='home_header'>
            <h1>MISSY J PHOTO</h1>
            <p>Missy is a Utah based photographer that focuses on landscapes and experiences.</p>
            <div/>
          </div>
      </Transition>
      <main className='home_galleriesContainer'>
        { galleriesJSX }
      </main>
    </div>
  )
}