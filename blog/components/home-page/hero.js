/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import classes from './hero.module.css';

export default function Hero(){
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
          src="/images/site/paulo.png" 
          alt="An image showing Paulo Felipe Brito" 
          width={300} 
          height={300}/>
      </div>
      <h1>Hi, I'm Paulo Felipe Brito</h1>
      <p>I blog about technologies and web development, especially Frontend frameworks.</p>
    </section>
  );
};