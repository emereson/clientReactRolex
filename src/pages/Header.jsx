import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './pagesStyle/header.css';
import axios from 'axios';

const Header = () => {
  const location = useLocation();
  const [url, setUrl] = useState('/');

  const [allSections, setallSections] = useState();

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/section`;

    axios
      .get(url)
      .then((res) => setallSections(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location.pathname]);

  return (
    <header className="header__container">
      <Link to="/" className="header__logo">
        <img src="/logo2.png" alt="logo Creative Art Video" />
      </Link>
      <ul className="header__ul">
        <li>
          <Link
            to="/"
            style={
              url === '/' ? { color: 'var(--text-color-gold)' } : {}
            }
          >
            HOME
          </Link>
        </li>
        {allSections?.sections.slice(0, 3).map((section) => (
          <li key={section.id}>
            <Link
              to={`/section/${section.id}`}
              style={
                url === `/section/${section.id}`
                  ? { color: 'var(--text-color-gold)' }
                  : {}
              }
            >
              {section.title}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/contact"
            style={
              url === '/contact'
                ? { color: 'var(--text-color-gold)' }
                : {}
            }
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <div className="header__iconsContainer">
        <a href="">
          <i className="bx bxl-facebook-circle"></i>
        </a>
        <a href="">
          <i className="bx bxl-instagram-alt"></i>
        </a>
        <a href="">
          <i className="bx bxl-tiktok"></i>
        </a>
        <a href="">
          <i className="bx bxl-whatsapp"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
