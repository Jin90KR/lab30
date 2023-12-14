import './App.css';
import React from 'react';
import Layout from './components/Layout';
import Dogsupplement from './pages/Dogsupplement';
import Contact from './pages/Contact';
import Dogthings from './pages/Dogthings'
import Brandstory from './pages/Brandstory'
import Review from './pages/Review'
import Community from './pages/Community.js'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dogtreat from './pages/Dogtreat';
import Itemdetail from './pages/Itemdetail';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>;
        <Route index element={<Home />} />;
        <Route path='/:itemId' element={<Itemdetail  />} />;
        <Route path='/about' element={<About />} />;
        <Route path='/dogtreat' element={<Dogtreat />} />;
        <Route path='/dogsupplement' element={<Dogsupplement />} />;
        <Route path='/login' element={<Login />} />;
        <Route path='/cart' element={<Cart />} />;
        <Route path='/dogthings' element={<Dogthings />} />;
        <Route path='/brandstory' element={<Brandstory />} />;
        <Route path='/review' element={<Review />} />;
        <Route path='/community' element={<Community />} />;
        <Route path='/contact' element={<Contact />} />;
        <Route path='/wishlist' element={<Wishlist />} />;
      </Route>
    </Routes>
  );
};

export default App;
