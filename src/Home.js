import React from 'react';
import LinkList from './Link';
import Title from './Title';
import HomeFooter from './HomeFooter';
// import Footer from './Footer';

function Home() {
  return (
    <section className='section'>
      <Title />
      <LinkList />
      <HomeFooter />
    </section>
  );
}

export default Home;
