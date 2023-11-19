import './App.css';
import React from 'react';
import Layout from './components/Layout';
import Brands from './pages/Brands';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Monster from './pages/Monster';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>;
        <Route index element={<Home />} />;
        <Route path='about' element={<About />} />;
        <Route path='monstersale' element={<Monster />} />;
        <Route path='brands' element={<Brands />} />;
        <Route path='contact' element={<Contact />} />;
      </Route>
    </Routes>
  );
};

export default App;
