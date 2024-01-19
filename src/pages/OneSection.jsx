import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './pagesStyle/oneSection.css';
import OneSectionFrontPage from '../components/oneSection/OneSectionFrontPage';
import CardSectionVideo from '../components/oneSection/CardSectionVideo';
import OnseSectionPhotoAlbum from '../components/oneSection/OnseSectionPhotoAlbum';

const OneSection = () => {
  const { id } = useParams();
  const [section, setSection] = useState();
  const [videos, setVideos] = useState(true);

  const [plaVideo, setplaVideo] = useState(false);

  useEffect(() => {
    setplaVideo(false);
    setTimeout(() => {
      setplaVideo(true);
    }, 100);
  }, [id]);

  // window.location.reload();

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/section/${id}`;

    axios
      .get(url)
      .then((res) => setSection(res.data.section))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    plaVideo && (
      <div className="oneSection__container">
        {section ? <OneSectionFrontPage section={section} /> : ''}
        <section className="oneSection__exampleContianer">
          <h2
            style={
              videos
                ? {
                    color: 'var(--text-color-gold)',
                    borderBottom: '1px solid var(--text-color-gold)',
                  }
                : { color: 'white' }
            }
            onClick={() => setVideos(true)}
          >
            Videos
          </h2>
          <h2
            style={
              videos
                ? { color: 'white' }
                : {
                    color: 'var(--text-color-gold)',
                    borderBottom: '1px solid var(--text-color-gold)',
                  }
            }
            onClick={() => setVideos(false)}
          >
            Photo Album
          </h2>
        </section>
        <section className="oneSection__videosPhotosContainer">
          {videos ? (
            <div className="oneSection__videosContainer">
              {section?.sectionVideos
                .sort((a, b) => new Date(a.id) - new Date(b.id))
                .map((video, index) => (
                  <CardSectionVideo
                    key={video.id}
                    video={video}
                    index={index}
                  />
                ))}
            </div>
          ) : (
            <OnseSectionPhotoAlbum section={section} />
          )}
        </section>
      </div>
    )
  );
};

export default OneSection;
