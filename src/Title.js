
import React from 'react'

import icon from './image/icon.svg';
import icon1 from './image/Icon1.svg';
import profilePhoto from "./image/profile-img.jpg"

function Title() {
  return (
    <article className='profile'>
      <div className='profile-info'>
        <img src={profilePhoto} alt='profilePhoto' id='profile__img' />
        <h2 id='name'>Amagara Nathaniel</h2>
        <h2 id='slack'>nath752L</h2>
      </div>
      <button className='share'>
        <img src={icon} alt='share icon' className='icon' />
        <img src={icon1} alt='share icon' className='icon1' />
      </button>
    </article>
  );
}

export default Title