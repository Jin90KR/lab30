import './App.css';
import React from 'react';
import Layout from './components/Layout';
import Brands from './pages/BRANDS';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Monstersale from './pages/Monster sale';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>;
        <Route path='monstersale' element={<Monstersale />} />;
        <Route path='brands' element={<Brands />} />;
        <Route path='contact' element={<Contact />} />;
      </Route>
    </Routes>
  );
}

export default App;
