import React from 'react';
import './pagesStyle/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer__container">
      <section className="footer__sectionOne">
        <article className="">
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
        </article>
        <p>FOLLOW OUR WORK ON OUR SOCIAL NETWORKS!</p>
      </section>
      <section className="footer__sectionTwo">
        <img src="/logo2.png" alt="" />
      </section>
      <section className="footer__sectionThree">
        <Link> GET IN TOUCH </Link>
        <p>
          Booking 2024 and 2025 now. Reserve your date in advance,
          give us the opportunity to be part of that special day.
        </p>
      </section>
    </div>
  );
};

export default Footer;
