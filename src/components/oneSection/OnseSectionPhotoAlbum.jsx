import React, { useEffect, useState } from 'react';
import './oneSectionStyle/OnseSectionPhotoAlbum.css';
import { useInView } from 'react-intersection-observer';

const OnseSectionPhotoAlbum = ({ section }) => {
  const [selectImgIndex, setSelectImgIndex] = useState(0);
  const [viewImg, setViewImg] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [playShow, setPlayShow] = useState(false);

  const clickPlayShow = () => {
    if (playShow) {
      setTimeout(() => {
        selectImgIndex < section?.galleries?.length - 1
          ? setSelectImgIndex(selectImgIndex + 1)
          : setSelectImgIndex(0); // Si llega al final, volver al inicio
      }, 3000); // Intervalo de tiempo entre cada cambio de imagen
    }
  };

  useEffect(() => {
    clickPlayShow();
  }, [selectImgIndex, playShow]);

  return (
    <div className="oneSection__photosContainer">
      <div className="oneSection__photosGrid oneSection__photosGrid2">
        {section?.photoAlbums?.map((photo, index) => (
          <div
            className="oneSection__photosGrid__div"
            ref={ref}
            key={photo.id}
            style={{
              gridColumn: 'span 2',
              gridRow: 'span 2',
            }}
          >
            <img
              src={`${import.meta.env.VITE_URL_IMG}${photo?.linkImg}`}
              alt=""
              onClick={() => {
                setViewImg(true);
                setSelectImgIndex(index);
              }}
              loading="..."
              style={
                inView
                  ? {
                      animation: `textAnimation 1.${
                        index * 2
                      }s forwards`,
                    }
                  : null
              }
            />
          </div>
        ))}

        {viewImg ? (
          <div className="oneSection__viewImgContainer">
            <i
              className="bx bx-x oneSection__closeViesImg"
              onClick={() => {
                setViewImg(false);
                setPlayShow(false);
              }}
            ></i>

            <i
              className="bx bx-chevron-left"
              onClick={() => {
                setSelectImgIndex((prevIndex) =>
                  prevIndex > 0 ? prevIndex - 1 : 0
                );
                setPlayShow(!playShow);
              }}
            ></i>

            <div className="oneSection__viewImgDiv">
              {section?.photoAlbums?.map((photo, index) => (
                <img
                  key={photo.id}
                  src={`${import.meta.env.VITE_URL_IMG}${
                    photo?.linkImg
                  }`}
                  alt=""
                  onClick={() => setViewImg(true)}
                  style={
                    index === selectImgIndex ? { opacity: '1' } : null
                  }
                />
              ))}
            </div>
            <button
              className="oneSection__sliderShow"
              onClick={() => {
                setPlayShow(!playShow);
                clickPlayShow();
              }}
            >
              {playShow ? (
                <i className="bx bx-stop"></i>
              ) : (
                <i className="bx bx-play"></i>
              )}
              <p>Slideshow</p>
            </button>
            <i
              className="bx bx-chevron-right"
              onClick={() => {
                setSelectImgIndex((prevIndex) =>
                  prevIndex < section?.photoAlbums?.length - 1
                    ? prevIndex + 1
                    : 0
                );
                setPlayShow(!playShow);
              }}
            ></i>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default OnseSectionPhotoAlbum;
