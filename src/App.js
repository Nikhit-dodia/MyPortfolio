import React from 'react';
import './style.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certification from './components/Certification';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certification />
      <Experience />
      <Footer />
    </div>
  );
}
