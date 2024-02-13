import React, { useEffect, useState } from 'react';
import './pagesStyle/section.css';
import axios from 'axios';
import CardSection from '../components/sections/CardSection';
import { Link } from 'react-router-dom';

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
  }, 3500);

  return (
    <div className="sections__container">
      <section className="sections__frontPage">
        <img
          className="sections__frontPageImg"
          src="/1.jpeg"
          alt="creative art video home "
        />
        {/* <article className="sections__frontPage__texts">
          <p>WELCOME TO</p>
          <h1>CREATIVE ART VIDEO</h1>
          <p>
            SEE SERVICES <img src="/flecha.png" alt="flecha" />
          </p>
        </article> */}
      </section>
      <section className="sections__servicesContainer" id="home">
        <h2>SERVICES</h2>
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
        <div
          className="sectionsNotes__articlesContainer"
          style={{
            transform: `translate3d(-${
              (100 / 6) * (idNote - 1)
            }%,0px,0px)`,
          }}
        >
          <article className={`sections__notesVisible  `}>
            <img src="/boda.jpg" alt="boda notes" />
            <div>
              <p>
                "Your wedding isn't just one day, for us, your wedding
                film will be forever."
              </p>
            </div>
          </article>
          <article className={`sections__notesVisible  `}>
            <img src="/1500.jpg" alt="event notes" />
            <div>
              <p>
                "Enjoy every second of your EVENT without being
                stressed about missing any of its important moments.
                We capture ALL OF THEM."
              </p>
            </div>
          </article>
          <article className={`sections__notesVisible `}>
            <img
              src="/1503.jpg"
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
          <article className={`sections__notesVisible  `}>
            <img
              src="/15Ashley.jpg"
              alt="The age of fifteen is the age that all young girls look
              forward to with joy, with hopes, and many dreams. Never
              stop dreaming."
            />
            <div>
              <p>
                "The age of fifteen is the age that all young girls
                look forward to with joy, with hopes, and many dreams.
                Never stop dreaming."
              </p>
            </div>
          </article>
          <article className={`sections__notesVisible  `}>
            <img
              src="/BODA03.jpeg"
              alt="Each second is a gift. Do what you enjoy now."
            />
            <div>
              <p>"Each second is a gift. Do what you enjoy now."</p>
            </div>
          </article>
          <article className={`sections__notesVisible  `}>
            <img
              src="/BODA04.jpeg"
              alt="LET US CAPTURE THE TRUE EMOTIONS OF YOUR WEDDING DAY."
            />
            <div>
              <p>
                "LET US CAPTURE THE TRUE EMOTIONS OF YOUR WEDDING
                DAY."
              </p>
            </div>
          </article>
        </div>

        <div className="sectionsNotes__arrowsContainer">
          <img
            src="/arrow-left.svg"
            alt=""
            onClick={() => {
              setidNote(idNote > 1 ? idNote - 1 : 6);
              setAutoSlide(false);
            }}
          />
          <span>{idNote}/6</span>
          <img
            src="/arrowRight.svg"
            alt=""
            onClick={() => {
              setidNote(idNote > 5 ? 1 : idNote + 1),
                setAutoSlide(false);
            }}
          />
        </div>
      </section>

      <section className="sections__letsWorkContainer">
        <img
          src="./home6.jpeg"
          alt="Creative art video  Let's work together"
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
