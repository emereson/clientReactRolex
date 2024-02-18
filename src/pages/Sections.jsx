import React, { useEffect, useState } from 'react';
import './pagesStyle/section.css';
import axios from 'axios';
import CardSection from '../components/sections/CardSection';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Estilos opcionales de efecto de desenfoque

const Sections = () => {
  const [allSections, setallSections] = useState();
  const [idNote, setidNote] = useState(1);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/section`;

    axios
      .get(url)
      .then((res) => setallSections(res.data))
      .catch((err) => console.log(err));
  }, []);

  setTimeout(() => {
    if (autoSlide) {
      if (idNote < 6) {
        setidNote(idNote + 1);
      } else {
        setidNote(1);
      }
    }
  }, 7000);

  return (
    <div className="sections__container">
      <section className="sections__frontPage">
        <LazyLoadImage
          effect="blur"
          src="/1.webp"
          alt="creative art video home"
          className="sections__frontPageImg"
          width="100%"
          height="100%"
        />
      </section>
      <section className="sections__servicesContainer" id="home">
        <h2>OUR SERVICES</h2>
        <article className="sections__articleTwo">
          {allSections?.sections.map((section, index) => (
            <CardSection
              key={section.id}
              section={section}
              index={index}
            />
          ))}
        </article>
      </section>
      <section className="sections__notesContainer">
        <article
          className={`sections__notesVisible  `}
          style={{
            opacity: idNote === 1 ? '1' : '0',
          }}
        >
          <img src="/boda.webp" alt="boda notes" />
          <div>
            <p>
              "Your wedding isn't just one day, for us, your wedding
              film will be forever."
            </p>
          </div>
        </article>
        <article
          className={`sections__notesVisible  `}
          style={{
            opacity: idNote === 2 ? '1' : '0',
          }}
        >
          <img src="/1500.webp" alt="event notes" lazy="load" />
          <div>
            <p>
              "Enjoy every second of your EVENT without being stressed
              about missing any of its important moments. We capture
              ALL OF THEM."
            </p>
          </div>
        </article>
        <article
          className={`sections__notesVisible `}
          style={{
            opacity: idNote === 3 ? '1' : '0',
          }}
        >
          <img
            lazy="load"
            src="/1503.webp"
            alt="An impactful creative film made up of the best and
              most memorable moments of your day."
          />
          <div>
            <p>
              "An impactful creative film made up of the best and
              most memorable moments of your day."
            </p>
          </div>
        </article>
        <article
          className={`sections__notesVisible  `}
          style={{
            opacity: idNote === 4 ? '1' : '0',
          }}
        >
          <img
            src="/15Ashley.webp"
            alt="The age of fifteen is the age that all young girls look
              forward to with joy, with hopes, and many dreams. Never
              stop dreaming."
            lazy="load"
          />
          <div>
            <p>
              "The age of fifteen is the age that all young girls look
              forward to with joy, with hopes, and many dreams. Never
              stop dreaming."
            </p>
          </div>
        </article>
        <article
          className={`sections__notesVisible  `}
          style={{
            opacity: idNote === 5 ? '1' : '0',
          }}
        >
          <img
            src="/BODA03.webp"
            alt="Each second is a gift. Do what you enjoy now."
            lazy="load"
          />
          <div>
            <p>"Each second is a gift. Do what you enjoy now."</p>
          </div>
        </article>
        <article
          className={`sections__notesVisible  `}
          style={{
            opacity: idNote === 6 ? '1' : '0',
          }}
        >
          <img
            src="/BODA04.webp"
            alt="LET US CAPTURE THE TRUE EMOTIONS OF YOUR WEDDING DAY."
            lazy="load"
          />
          <div>
            <p>
              "LET US CAPTURE THE TRUE EMOTIONS OF YOUR SPECIAL DAY."
            </p>
          </div>
        </article>

        <div className="sectionsNotes__arrowsContainer">
          <img
            src="/arrow-left.svg"
            alt=""
            onClick={() => {
              setidNote(idNote > 1 ? idNote - 1 : 6);
              setAutoSlide(false);
            }}
            lazy="load"
          />
          <span>{idNote}/6</span>
          <img
            src="/arrowRight.svg"
            alt=""
            onClick={() => {
              setidNote(idNote > 5 ? 1 : idNote + 1),
                setAutoSlide(false);
            }}
            lazy="load"
          />
        </div>
      </section>

      <section className="sections__letsWorkContainer">
        <img
          src="./home6.webp"
          alt="Creative art video  Let's work together"
          lazy="load"
        />
        <article className="sectionsLetsWork__article">
          <h3>Let's work together</h3>
          <Link to="/contact">INQUIRE HERE</Link>
        </article>
      </section>
    </div>
  );
};

export default Sections;
