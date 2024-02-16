import React, { useEffect, useState } from 'react';
import './oneSectionStyle/oneSectionFronPage.css';
import ReactPlayer from 'react-player';

const OneSectionFrontPage = ({ section, setSelect, select, id }) => {
  const [videoKey, setVideoKey] = useState(0);

  useEffect(() => {
    setVideoKey((prevKey) => prevKey + 1);
  }, [id, section]);
  return (
    <section className="oneSectionFrontPage__Container">
      <img
        className="oneSectionFrontPage__img"
        src={section?.sectionImg}
        alt=""
      />
      <div className="oneSectionFrontPage__articlesContainer">
        <article className="oneSectionFrontPage__videosContainer">
          {section && id ? (
            <ReactPlayer
              key={videoKey}
              className="oneSectionFrontPage__video"
              playing={true}
              volume={0}
              url={section.linkVideo}
              controls={true}
              loop={true}
              width="100%"
              height="100%"
            />
          ) : (
            ''
          )}
        </article>
        <article className="oneSectionFrontPage__titleContainer">
          <h1>{section?.title}</h1>
          {section?.sectionDescriptions.map((description) => (
            <div key={description.id}>
              <p>{description.description}</p>
            </div>
          ))}
        </article>
      </div>
      <section className="oneSection__selectContianer">
        <h2
          style={
            select === 'videos'
              ? {
                  color: 'var(--text-color-gold)',
                  borderBottom: '1px solid var(--text-color-gold)',
                }
              : { color: 'white' }
          }
          onClick={() => setSelect('videos')}
        >
          VIDEOS
        </h2>
        {section?.photoAlbums.length === 0 ? null : (
          <h2
            style={
              select === 'album'
                ? {
                    color: 'var(--text-color-gold)',
                    borderBottom: '1px solid var(--text-color-gold)',
                  }
                : { color: 'white' }
            }
            onClick={() => setSelect('album')}
          >
            PHOTO ALBUM
          </h2>
        )}
        <h2
          style={
            select === 'gallery'
              ? {
                  color: 'var(--text-color-gold)',
                  borderBottom: '1px solid var(--text-color-gold)',
                }
              : { color: 'white' }
          }
          onClick={() => setSelect('gallery')}
        >
          GALLERY
        </h2>
      </section>
    </section>
  );
};

export default OneSectionFrontPage;
