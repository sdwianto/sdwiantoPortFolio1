import React from 'react';

import AboutMe from './home/partials/about';
import Contact from './home/partials/contact';
import Experience from './home/partials/experience';
import Faq from './home/partials/faq';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import Portfolio from './home/partials/portfolio';
import Service from './home/partials/service';
import Skill from './home/partials/skill';
import Testimonials from './home/partials/testimonials';
import Working from './home/partials/working';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <AboutMe />
      <Skill />
      <Working />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
