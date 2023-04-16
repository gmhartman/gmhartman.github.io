import React from 'react';
import About from './components/about';
import Nav from './components/nav';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Start from './components/start';
// import Footer from './components/footer';
// import Overlay from './components/overlay';

import './App.css';

function App() {
  return (
    <div>
      {/* <Overlay /> */}
      <Nav />
      <Start />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
