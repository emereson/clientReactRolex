import React from 'react';
import './pagesStyle/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer__container">
      <section className="footer__sectionOne">
        <article className="">
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
        </article>
        <p>FOLLOW OUR WORK ON OUR SOCIAL NETWORKS!</p>
      </section>
      <section className="footer__sectionTwo">
        <img src="/logo2.png" alt="" />
      </section>
      <section className="footer__sectionThree">
        <Link> GET IN TOUCH </Link>
        <p>
          Limited availability in 2024. Booking 2025 now. Reserve your
          date early to avoid disappointment.
        </p>
      </section>
    </div>
  );
};

export default Footer;
