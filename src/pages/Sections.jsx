import React, { useEffect, useState } from 'react';
import './pagesStyle/section.css';
import axios from 'axios';
import CardSection from '../components/sections/CardSection';

const Sections = () => {
  const [allSections, setallSections] = useState();

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/section`;

    axios
      .get(url)
      .then((res) => setallSections(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="sections__container">
      <section className="sections__frontPage">
        <span className="film-effect"></span>
        <img
          className="sections__frontPageImg"
          src="/1.jpg"
          alt="creative art video home "
        />
        <article className="sections__frontPage__texts">
          <p>WELCOME TO</p>
          <h1>CREATIVE ART VIDEO</h1>
          <p>
            SEE SERVICES <img src="/flecha.png" alt="flecha" />
          </p>
        </article>
        <article className="sections__frontPage__teamImages">
          <img src="./02-min.jpg" alt="image 1" />
          <img src="./16-min.jpg" alt="image 2" />
          <img src="./4.jpg" alt="image 3" />
          <img src="./5.jpg" alt="image 4" />
        </article>
      </section>
      <section className="sections__servicesContainer">
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
    </div>
  );
};

export default Sections;
