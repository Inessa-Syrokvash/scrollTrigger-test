import './App.css';
import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.from('.square', {opacity: 1, x: -500, duration: 2,
      scrollTrigger: {
        trigger: '.square',
        markers: true,
      }
    })
  }, [])

  return(
    <div>
      <section className='section section--green'></section>

      <section className='section section--blue'>
        <div className='square'></div>
      </section>

      <section className='section section--green'></section>
    </div>
  );
}

export default App;
