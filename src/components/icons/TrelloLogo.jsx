/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function TrelloLogo(
  { width = '136', height = '138', className },
) {
  return (
    <svg
      width={ width }
      height={ height }
      viewBox="0 0 136 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={ className }
    >
      <g filter="url(#filter0_df_101_185)">
        <path d="M11.9277 55.5079C9.7585 46.112 15.6169 36.7366 25.0128 34.5674L88.4242 19.9277C97.8201 17.7585 107.196 23.6169 109.365 33.0128L124.004 96.4242C126.174 105.82 120.315 115.196 110.919 117.365L47.5079 132.004C38.112 134.174 28.7366 128.315 26.5674 118.919L11.9277 55.5079Z" fill="white" />
        <path d="M108.14 27.7095C106.647 21.2423 100.195 17.2103 93.7276 18.7034L19.7095 35.7918C13.2423 37.2848 9.21027 43.7374 10.7033 50.2046L27.7916 124.222C29.2848 130.69 35.7374 134.722 42.2046 133.229L116.223 116.14C122.69 114.647 126.722 108.195 125.229 101.727L108.14 27.7095ZM69.6712 104.521C70.3509 107.465 68.2835 110.103 65.3395 110.783L44.1941 115.664C41.2501 116.344 38.6452 114.785 37.9656 111.841L24.3417 52.8293C23.6619 49.8845 25.1822 46.7462 28.1262 46.0665L49.2716 41.1847C52.2155 40.5051 55.3676 42.5647 56.0474 45.5094L69.6712 104.521ZM106.031 67.9681C106.711 70.9121 105.016 73.9286 102.071 74.6085L80.9367 79.4878C77.992 80.1676 75.0052 78.2311 74.3257 75.2879L66.8088 42.7285C66.1289 39.7837 67.9942 36.8623 70.9389 36.1824L92.0735 31.3031C95.0182 30.6233 97.8346 32.4639 98.5145 35.4087L106.031 67.9681Z" fill="#23719F" />
      </g>
      <defs>
        <filter id="filter0_df_101_185" x="0.392639" y="0.392639" width="135.147" height="137.147" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="-8" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_185" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_185" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect2_foregroundBlur_101_185" />
        </filter>
      </defs>
    </svg>
  );
}

TrelloLogo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string.isRequired,
};