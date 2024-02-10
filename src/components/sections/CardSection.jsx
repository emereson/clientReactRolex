import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './sectionsStyle/cardSection.css';
import ReactPlayer from 'react-player';

const CardSection = ({ section, index }) => {
  const [viewTitle, setViewTitle] = useState(false);
  const videoRef = useRef(null);
  const videoBlurRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (videoRef.current) {
      if (viewTitle) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
    if (videoBlurRef.current) {
      if (viewTitle) {
        videoBlurRef.current.play();
      } else {
        videoBlurRef.current.pause();
      }
    }
  }, [viewTitle]);

  return (
    <div
      ref={ref}
      className={`cardSection__container  `}
      onMouseOver={() => setViewTitle(true)}
      onMouseOut={() => setViewTitle(false)}
      style={
        inView
          ? {
              animation: `textAnimation 1.${index * 2}s ease-in-out`,
            }
          : null
      }
    >
      <img
        src={section.sectionImg}
        alt={section.title}
        style={viewTitle ? { opacity: '0' } : { opacity: '1' }}
      />

      <ReactPlayer
        className="cardSection__video"
        playing={viewTitle}
        volume={0}
        url={section.linkVideo}
        controls={false}
        loop={true}
        width="100%"
      />

      <Link
        to={`/section/${section.id}`}
        className="cardSection__link"
      >
        {section.title}
      </Link>
    </div>
  );
};

export default CardSection;
