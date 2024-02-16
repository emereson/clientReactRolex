import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import './App.css';

// Lazy load the Sections component
const Sections = lazy(() => import('./pages/Sections'));
// Lazy load the OneSection component
const OneSection = lazy(() => import('./pages/OneSection'));
// Lazy load the Contact component
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Sections />} />
          <Route path="/section/:id" element={<OneSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <div
        className="top__container"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img src="/arrow-left.svg" alt="" />
        <p>Top</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
