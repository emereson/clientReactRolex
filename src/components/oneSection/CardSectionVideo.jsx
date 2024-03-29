import React, { useState } from 'react';
import './oneSectionStyle/cardSectionVideo.css';
import { useInView } from 'react-intersection-observer';

const CardSectionVideo = ({ video, index }) => {
  const [openVideo, setOpenVideo] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <article
      ref={ref}
      className="cardSectionVideo__container"
      style={
        inView
          ? {
              animation: `textAnimation 1.${index * 2}s ease-in-out`,
            }
          : null
      }
    >
      <h2>{video.title} </h2>
      <div
        className={`cardSectionVideo__videoContainer ${
          !openVideo ? 'cardSectionVideo__closeVideo' : ''
        }`}
      >
        <i
          className="bx bx-x"
          onClick={() => setOpenVideo(!openVideo)}
        ></i>
        <iframe
          title={video.title}
          src={`${video.linkVideo}${openVideo ? '?autoplay=1' : ''}`}
          width="90%"
          height="90%"
          frameBorder="0"
        ></iframe>
      </div>
      <div
        className="cardSectionVideo__imgContainer"
        onClick={() => setOpenVideo(!openVideo)}
      >
        <img
          src={`${import.meta.env.VITE_URL_IMG}${video.linkImg}`}
          alt=""
        />
        <div className="cardSectionVideo__imgPlayVideo">
          <p>PLAY FILM</p>
          <i className="bx bx-play"></i>
        </div>
      </div>
    </article>
  );
};

export default CardSectionVideo;
