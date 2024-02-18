import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import './App.css';
import Sections from './pages/Sections';
import OneSection from './pages/OneSection';
import Contact from './pages/Contact';
import LoadingPage from './pages/LoadingPage';

function App() {
  const [viewTop, setViewTop] = useState(false);
  const [viewloading, setViewLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setViewTop(true);
      } else {
        setViewTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setViewLoading(true);
    }, 1500);
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />

      <LoadingPage viewloading={viewloading} />

      <Routes>
        <Route path="/" element={<Sections />} />
        <Route path="/section/:id" element={<OneSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {viewTop ? (
        <div
          className="top__container"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src="/arrow-left.svg" alt="" />
          <p>Top</p>
        </div>
      ) : (
        ''
      )}
      <Footer />
    </>
  );
}

export default App;
