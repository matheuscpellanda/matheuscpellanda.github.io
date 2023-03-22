/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function FirebaseLogo(
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
      <path d="M16.444 65.299L26.336 1.93965C26.6833 -0.220329 29.5775 -0.734609 30.5937 1.2068L41.2189 21.0966L16.444 65.299ZM86.7681 80.6888L77.3264 22.3309C77.0434 20.518 74.7666 19.7723 73.4545 21.0837L14 80.6888L46.9174 99.1514C48.9626 100.283 51.5224 100.283 53.5677 99.1514L86.7681 80.6888ZM60.038 29.7879L52.4229 15.2981C51.5739 13.6524 49.2456 13.6524 48.3838 15.2981L14.9004 74.9546L60.038 29.7879Z" fill="#F58220" />
    </svg>

  );
}

FirebaseLogo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};
