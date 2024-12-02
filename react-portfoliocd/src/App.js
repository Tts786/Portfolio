import logo from './logo.svg';
import './App.css';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;

    


