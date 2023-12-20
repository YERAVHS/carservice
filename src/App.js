import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cars from './components/Cars';
import Cart from './components/Cart';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import CarParts from './components/CarParts';
import Reviews from './components/Reviews';
import SpecialOffers from './components/SpecialOffers';
function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<Cars />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/carparts" element={<CarParts />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/special-offers" element={<SpecialOffers />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;

