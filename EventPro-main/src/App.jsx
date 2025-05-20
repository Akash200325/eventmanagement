// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Contact from './pages/Contact';
import BookingForm from './pages/BookingForm'; 
import ServiceCatalog from "./pages/ServiceCatalog"; // At the top


import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/catalog" element={<ServiceCatalog />}/>
        <Route path="/test" element={<h1>Test Page</h1>} />
 {/* Add BookingForm route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;