import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../Gallery/Gallery'

export default function Work() {
  return (
    <div className='work_container'>
      {/* <Link to='/work/oceans' className='work_links'>
        <div className='work_link_container'>
          OCEANS
          {/* <h2>OCEANS</h2>           
        {/* </div>
      </Link>
      <Link to='/work/outdoors' className='work_links outdoors'>OUTDOORS</Link> */} 
      <Gallery />
    </div> 
  )
}