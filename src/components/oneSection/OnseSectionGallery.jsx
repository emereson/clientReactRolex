import React, { useState, useEffect } from 'react';
import './oneSectionStyle/OnseSectionPhotoAlbum.css';
import { useInView } from 'react-intersection-observer';

const OnseSectionGallery = ({ section }) => {
  const [selectImgIndex, setSelectImgIndex] = useState(0);
  const [viewImg, setViewImg] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [imagenes, setImagenes] = useState([]);
  const [playShow, setPlayShow] = useState(false);

  useEffect(() => {
    const obtenerTamanos = async () => {
      const tamanos = await Promise.all(
        section?.galleries?.map(async (photo) => {
          const tamano = await obtenerTamanoIntrinseco(
            `${import.meta.env.VITE_URL_IMG}${photo.linkImg}`
          );
          return { ...tamano, id: photo.id };
        })
      );
      setImagenes(tamanos);
    };

    obtenerTamanos();
  }, [section]);

  const obtenerTamanoIntrinseco = (url) => {
    return new Promise((resolve, reject) => {
      const imagen = new Image();
      imagen.onload = () => {
        resolve({
          width: imagen.naturalWidth,
          height: imagen.naturalHeight,
        });
      };
      imagen.onerror = (error) => {
        reject(error);
      };
      imagen.src = url;
    });
  };

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
      <div className="oneSection__photosGrid">
        {section?.galleries?.map((photo, index) => (
          <div
            className="oneSection__photosGrid__div"
            ref={ref}
            key={photo.id}
            style={{
              ...(imagenes[index]?.width > imagenes[index]?.height
                ? { gridColumn: 'span 2', gridRow: 'auto' }
                : {}),
              maxHeight: '600px',
            }}
          >
            <img
              src={`${import.meta.env.VITE_URL_IMG}${photo?.linkImg}`}
              alt=""
              onClick={() => {
                setViewImg(true);
                setSelectImgIndex(index);
              }}
              loading="lazy"
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

        <div
          className="oneSection__viewImgContainer"
          style={{ display: viewImg ? 'flex' : 'none' }}
        >
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
              setPlayShow(false);
            }}
          ></i>

          <div className="oneSection__viewImgDiv">
            {section?.galleries?.map((photo, index) => (
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
                prevIndex < section?.galleries?.length - 1
                  ? prevIndex + 1
                  : 0
              );
              setPlayShow(false);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default OnseSectionGallery;
