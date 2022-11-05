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
      <a
        href='https://twitter.com/nath7521'
        target='_blank'
        id='btn__twitter'
        className='btn'
      >
        Twitter Link
      </a>

      <a
        href='https://training.zuri.team/'
        target='_blank'
        id='btn__zuri'
        className='btn'
      >
        Zuri Team
      </a>
      <a
        href='https://books.zuri.team/'
        target='_blank'
        id='books'
        className='btn'
      >
        Zuri Books
      </a>
      <a
        href='https://books.zuri.team/python-for-beginners?ref_id=nath'
        target='_blank'
        id='book__python'
        className='btn'
      >
        Python Book
      </a>
      <a
        href='https://background.zuri.team/'
        target='_blank'
        id='pitch'
        className='btn'
      >
        Checks for Coders
      </a>
      <a
        href='https://books.zuri.team/design-rules'
        target='_blank'
        id='book__design'
        className='btn'
      >
        Books
      </a>
      <Link to='/contact' target='_blank' id='contact' className='btn'>
        Contact Me
      </Link>
    </article>
  );
}

export default LinkList;
