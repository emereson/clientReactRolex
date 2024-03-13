import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './pagesStyle/oneSection.css';
import OneSectionFrontPage from '../components/oneSection/OneSectionFrontPage';
import CardSectionVideo from '../components/oneSection/CardSectionVideo';
import OnseSectionPhotoAlbum from '../components/oneSection/OnseSectionPhotoAlbum';
import OnseSectionGallery from '../components/oneSection/OnseSectionGallery';

const OneSection = () => {
  const { id } = useParams();
  const [section, setSection] = useState();
  const [select, setSelect] = useState('videos');
  const [loading, setloading] = useState(false);
  const [plaVideo, setplaVideo] = useState(false);

  useEffect(() => {
    setplaVideo(false);
    setTimeout(() => {
      setplaVideo(true);
    }, 500);
  }, [id]);

  useEffect(() => {
    setloading(false);
    setTimeout(() => {
      setloading(true);
    }, 1500);
  }, [id]);

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/section/${id}`;

    axios
      .get(url)
      .then((res) => setSection(res.data.section))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="oneSection__container">
      <OneSectionFrontPage
        section={section}
        setSelect={setSelect}
        select={select}
        id={id}
      />

      <section className="oneSection__videosPhotosContainer">
        {select === 'videos' ? (
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
        ) : select === 'album' ? (
          <OnseSectionPhotoAlbum section={section} />
        ) : (
          <OnseSectionGallery section={section} />
        )}
      </section>
    </div>
  );
};

export default OneSection;
