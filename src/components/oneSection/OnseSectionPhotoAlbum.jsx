import React, { useState } from 'react';
import './oneSectionStyle/OnseSectionPhotoAlbum.css';
import { useInView } from 'react-intersection-observer';

const OnseSectionPhotoAlbum = ({ section }) => {
  const [selectImgIndex, setSelectImgIndex] = useState(0);
  const [viewImg, setViewImg] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="oneSection__photosContainer">
      <div className="oneSection__photosGrid">
        {section?.photoAlbums?.map((photo, index) => (
          <div
            className="oneSection__photosGrid__div"
            ref={ref}
            key={photo.id}
            style={{
              ...(index % 5 === 0
                ? { gridColumn: 'span 2', gridRow: 'span 2 ' }
                : {}),
              // ...(index === 0
              maxHeight: '600px',
            }}
          >
            <img
              src={photo.linkImg}
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
              onClick={() => setViewImg(false)}
            ></i>
            <i
              className="bx bx-chevron-left"
              onClick={() =>
                selectImgIndex > 0
                  ? setSelectImgIndex(selectImgIndex - 1)
                  : setSelectImgIndex(0)
              }
            ></i>

            <div className="oneSection__viewImgDiv">
              {section?.photoAlbums?.map((photo, index) => (
                <img
                  key={photo.id}
                  src={photo.linkImg}
                  alt=""
                  onClick={() => setViewImg(true)}
                  style={
                    index === selectImgIndex ? { opacity: '1' } : null
                  }
                />
              ))}
            </div>
            <i
              className="bx bx-chevron-right"
              onClick={() =>
                selectImgIndex < section?.photoAlbums?.length - 1
                  ? setSelectImgIndex(selectImgIndex + 1)
                  : setSelectImgIndex(
                      section?.photoAlbums?.length - 1
                    )
              }
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
