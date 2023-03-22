/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function HTML5Logo(
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
      <path d="M14.8164 88.668L7 1H92.8875L85.0625 88.6547L49.8914 98.4047L14.8164 88.668Z" fill="#E44D26" />
      <path d="M49.9437 90.9523L78.3641 83.0727L85.0508 8.16797H49.9437V90.9523Z" fill="#F16529" />
      <path d="M49.9438 40.6828H35.7156L34.7328 29.6719H49.9438V18.9203H22.982L25.882 51.4352H49.9438V40.6828ZM49.9438 68.607L49.8961 68.6203L37.9219 65.3859L37.157 56.8117H26.3625L27.8688 73.6937L49.8945 79.8078L49.9438 79.7945V68.607Z" fill="#EBEBEB" />
      <path d="M49.9062 40.6828V51.4352H63.1461L61.8984 65.3797L49.9062 68.6164V79.8031L71.9492 73.6937L74.6375 43.5703L74.8992 40.6828H49.9062ZM49.9062 18.9203V29.6719H75.8781L76.8414 18.9203H49.9062Z" fill="white" />
    </svg>
  );
}

HTML5Logo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};
