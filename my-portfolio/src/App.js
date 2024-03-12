import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Switch ve BrowserRouter'ı Routes ve Router olarak değiştirdik
import Header from './components/Header';
import Project from './components/Project';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* Routes öğesini ekledik */}
          <Route path="/projects" element={<Project />} /> {/* Route öğelerini element propu ile değiştirdik */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;