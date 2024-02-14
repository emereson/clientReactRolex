import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './pages/Header';
import Sections from './pages/Sections';
import OneSection from './pages/OneSection';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Sections />} />
        <Route path="/section/:id" element={<OneSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
