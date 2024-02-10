import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './pagesStyle/header.css';
import axios from 'axios';

const Header = () => {
  const location = useLocation();
  const [url, setUrl] = useState('/');
  const [headerWhite, setheaderWhite] = useState(false);
  const [allSections, setallSections] = useState();
  const [openMenu, setOpenMenu] = useState(false);

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
  useEffect(() => {
    const handleScroll = () => {
      if (document.getElementById('app').scrollTop > 500) {
        setheaderWhite(true);
      } else {
        setheaderWhite(false);
      }
    };

    document
      .getElementById('app')
      .addEventListener('scroll', handleScroll);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      document
        .getElementById('app')
        .removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`header__container ${
        headerWhite || openMenu ? 'headerWhite__container' : ''
      } `}
    >
      <Link to="/" className="header__logo">
        <img src="/logo2.png" alt="logo Creative Art Video" />
      </Link>
      <section
        className={`header__menuContainer  ${
          openMenu ? '' : 'close__menuContainer'
        }`}
      >
        <ul className="header__ul">
          <li>
            <Link
              to="/"
              style={
                url === '/' ? { color: 'var(--text-color-gold)' } : {}
              }
              onClick={() => setOpenMenu(false)}
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
                onClick={() => setOpenMenu(false)}
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
              onClick={() => setOpenMenu(false)}
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
      </section>
      <section
        className={`header__menuAmburguesa  ${
          !openMenu ? '' : 'header__closeMenuAmburguesa'
        }`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </section>
    </header>
  );
};

export default Header;
