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
      if (window.scrollY > 350) {
        setheaderWhite(true);
      } else {
        setheaderWhite(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
          <a
            href="https://www.facebook.com/creativeartv?mibextid=sCpJLy"
            target="_blank"
          >
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a
            href="https://www.instagram.com/creativeartvideo?igsh=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr"
            target="_blank"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a
            href="https://www.tiktok.com/@rolexcav?_t=8jqzKPCjP4M&_r=1"
            target="_blank"
          >
            <i className="bx bxl-tiktok"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=012135870282"
            target="_blank"
          >
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
