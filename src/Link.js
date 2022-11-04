import React from 'react';
import { Link } from 'react-router-dom';

function LinkList() {
  return (
    <article className='links'>
      {/* <Link
        to='https://twitter.com/nath7521'
        target='_blank'
        id='twitter'
        className='btn'
      >
        Twitter Link
      </Link> */}
      <Link
        to='https://twitter.com/nath7521'
        target='_blank'
        id='btn__twitter'
        className='btn'
      >
        Twitter Link
      </Link>
     
      <Link
        to='https://training.zuri.team/'
        target='_blank'
        id='btn__zuri'
        className='btn'
      >
        Zuri Team
      </Link>
      <Link
        to='https://books.zuri.team/'
        target='_blank'
        id='books'
        className='btn'
      >
        Zuri Books
      </Link>
      <Link
        to='https://books.zuri.team/python-for-beginners?ref_id=nath'
        target='_blank'
        id='book__python'
        className='btn'
      >
        Python Book
      </Link>
      <Link
        to='https://background.zuri.team/'
        target='_blank'
        id='pitch'
        className='btn'
      >
        Checks for Coders
      </Link>
      <Link
        to='https://books.zuri.team/design-rules'
        target='_blank'
        id='book__design'
        className='btn'
      >
        Books
      </Link>
      <Link to='/contact' target='_blank' id='contact' className='btn'>
        Contact Me
      </Link>
    </article>
  );
}

export default LinkList;
