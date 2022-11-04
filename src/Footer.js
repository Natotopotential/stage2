import React from 'react'
import I4G from './image/i4gLogo.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h2 className='zurilogo footer-imgs'>
          Zuri<span className='zuri'></span>Internship
        </h2>

        <p className='attribution  footer-imgs'>
          HNG Internship 9 Frontend Task
        </p>
        <img src={I4G} alt='i4gLogo' className='i4glogo footer-imgs' />
      </div>
    </footer>
  );
}

export default Footer