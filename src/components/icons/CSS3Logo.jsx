/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function CSS3Logo(
  { width = '100', height = '100', className = undefined },
) {
  return (
    <svg
      width={ width }
      height={ height }
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={ className }
    >
      <path d="M14.0241 90.003L6 0H94.1745L86.1424 89.9894L50.0338 100L14.0241 90.003V90.003Z" fill="#1572B6" />
      <path d="M50.0881 92.3491L79.266 84.2596L86.1305 7.35907H50.0881V92.3491Z" fill="#33A9DC" />
      <path d="M50.0881 39.9667H64.695L65.7038 28.6631H50.0881V17.6245H77.768L77.503 20.5863L74.7894 51.0052H50.0881V39.9667Z" fill="white" />
      <path d="M50.1536 68.6347L50.1049 68.649L37.8117 65.3297L37.0256 56.5258H25.9463L27.4922 73.8583L50.1033 80.1338L50.1536 80.1194V68.6347V68.6347Z" fill="#EBEBEB" />
      <path d="M63.7567 50.5387L62.427 65.3212L50.1155 68.6445V80.1292L72.7449 73.8577L72.9109 71.9925L74.8311 50.5387H63.7567Z" fill="white" />
      <path d="M50.1257 17.6245V28.6631H23.4627L23.2416 26.1826L22.7388 20.5863L22.4746 17.6245H50.1257V17.6245ZM50.0882 39.9683V51.0068H37.9498L37.7288 48.5263L37.2252 42.93L36.9618 39.9683H50.0882V39.9683Z" fill="#EBEBEB" />
    </svg>
  );
}

CSS3Logo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};
