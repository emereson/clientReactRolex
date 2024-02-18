import React from 'react';
import './pagesStyle/loadingPage.css';

const LoadingPage = ({ viewloading }) => {
  return (
    <div
      className={`loadingPage__container ${
        viewloading ? 'loadingPage__exit' : ''
      }`}
    >
      <img src="logo2.webp" alt="creative art video" />
    </div>
  );
};

export default LoadingPage;
