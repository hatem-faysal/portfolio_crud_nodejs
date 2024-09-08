import React from 'react';
import Hero from '../../Section/Hero';
import About from '../../Section/About';
import Stats from '../../Section/Stats';
import Skills from '../../Section/Skills';
import Resume from '../../Section/Resume';
import Portfolio from '../../Section/Portfolio';
import Services from '../../Section/Services';
import Testimonials from '../../Section/Testimonials';
import Contact from '../../Section/Contact';
const Main = () => {
  return (
    <>
        <main className="main">
              <Hero/>
              <About/>
              <Stats/>
              <Skills/>
              <Resume/>
              <Portfolio/>
              <Services/>
              {/* <Testimonials/> */}
              <Contact/>
        </main>
    </>
  );
};

export default Main;