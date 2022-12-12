import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './utils/Router';
import ScrollToTop from './utils/ScrollToTop'
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/Kasa'>
    <ScrollToTop />
    <Header />
      <Router />
    <Footer />
  </BrowserRouter>
);