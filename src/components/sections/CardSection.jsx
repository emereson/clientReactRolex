import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

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
      className={`cardSection__container ${
        viewTitle ? 'cardSection__viewTitle' : ''
      } `}
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
      <img src={section.sectionImg} alt={section.title} />
      <video
        ref={videoBlurRef}
        muted
        loop
        className={`cardSection__blurVideo ${
          !viewTitle ? 'close__blurVideo' : ''
        }`}
      >
        <source src={section.linkVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        ref={videoRef}
        muted
        loop
        className={`cardSection__video  ${
          !viewTitle ? 'close__video' : ''
        }`}
      >
        <source src={section.linkVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
