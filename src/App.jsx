import React, { useEffect, useRef } from 'react';
import {
  Routes, Route,
  Navigate
} from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Certificates from './pages/Certificates'
import Experience from './pages/Experience';

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  )
}

export default App
