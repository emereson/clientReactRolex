import React from 'react';
import './oneSectionStyle/oneSectionFronPage.css';

const OneSectionFrontPage = ({ section }) => {
  return (
    <section className="oneSectionFrontPage__titleVideoContainer">
      <img
        className="oneSectionFrontPage__img"
        src={section.sectionImg}
        alt=""
      />
      <span className="film-effect"></span>
      <article className="oneSectionFrontPage__titleContainer">
        <h1>{section?.title}</h1>
        {section?.sectionDescriptions.map((description) => (
          <div key={description.id}>
            <p>{description.description}</p>
          </div>
        ))}
      </article>
      <article className="oneSectionFrontPage__videosContainer">
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          className="oneSectionFrontPage__videoBlur"
        >
          <source src={section?.linkVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          className="oneSectionFrontPage__video"
        >
          <source src={section?.linkVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </article>
    </section>
  );
};

export default OneSectionFrontPage;
