import React from 'react';
import './pagesStyle/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer__container">
      <section className="footer__sectionOne">
        <article>
          <a
            href="https://www.facebook.com/creativeartv?mibextid=sCpJLy"
            target="_blank"
            aria-label="Facebook de Creative Art Video"
          >
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a
            href="https://www.instagram.com/creativeartvideo?igsh=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr"
            target="_blank"
            aria-label="Instagram de Creative Art Video"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a
            href="https://www.tiktok.com/@rolexcav?_t=8jqzKPCjP4M&_r=1"
            target="_blank"
            aria-label="TikTok de Creative Art Video"
          >
            <i className="bx bxl-tiktok"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=012135870282"
            target="_blank"
            aria-label="WhatsApp de Creative Art Video"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
        </article>

        <p>FOLLOW OUR WORK ON OUR SOCIAL NETWORKS!</p>
      </section>
      <section className="footer__sectionTwo">
        <img src="/logo2.png" alt="" />
        <a
          href="https://you-developer.com"
          target="_blank"
          aria-label="Visitar a  desarrollador idotcode"
          role="link"
        >
          whit
          <i className="bx bxs-heart"></i>
          by IdotCode
        </a>
      </section>
      <section className="footer__sectionThree">
        <Link to="contact"> GET IN TOUCH </Link>
        <p>
          Booking {new Date().getFullYear()} and{' '}
          {new Date().getFullYear() + 1} now. Reserve your date in
          advance, give us the opportunity to be part of that special
          day.
        </p>
      </section>
    </div>
  );
};

export default Footer;
