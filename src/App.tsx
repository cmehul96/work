import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReportPage from './pages/Report';
import ForesitePage from './pages/Foresite';
import PoolPage from './pages/Pool';
import FlipkartPage from './pages/Flipkart';
import SwiggyPage from './pages/Swiggy';
import IndihoodPage from './pages/Indihood';
import Resume from './pages/Resume';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/foresite" element={<ForesitePage />} />
        <Route path="/pool" element={<PoolPage />} />
        <Route path="/flipkart" element={<FlipkartPage />} />
        <Route path="/swiggy" element={<SwiggyPage />} />
        <Route path="/indihood" element={<IndihoodPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}
