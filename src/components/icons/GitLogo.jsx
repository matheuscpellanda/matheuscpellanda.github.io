/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function GitLogo(
  { width = '116', height = '110', className },
) {
  return (
    <svg
      width={ width }
      height={ height }
      viewBox="0 0 116 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={ className }
    >
      <g filter="url(#filter0_df_101_180)">
        <path d="M99.1243 39.0101L46.7692 6.2886C43.7558 4.40379 39.7831 5.32096 37.897 8.33691L31.1062 19.2105L44.8968 27.8301C47.2983 26.3496 50.4194 26.2502 52.9737 27.8467C54.1912 28.6084 55.1698 29.6974 55.7976 30.9892C56.4255 32.281 56.6772 33.7234 56.524 35.1515L69.8153 43.4603C72.2195 41.9565 75.3689 41.8424 77.9366 43.4513C81.5267 45.6932 82.6178 50.4194 80.3742 54.0097C79.8412 54.8635 79.1452 55.6038 78.326 56.1884C77.5068 56.773 76.5804 57.1904 75.5999 57.4168C74.6193 57.6431 73.6037 57.6741 72.6111 57.5078C71.6186 57.3415 70.6685 56.9812 69.8151 56.4475C68.533 55.6456 67.5166 54.4823 66.8939 53.104C66.2713 51.7256 66.0701 50.1939 66.3158 48.7016L53.9214 40.9541L60.0394 67.4614C60.8531 67.6526 61.6301 67.9752 62.34 68.4165C65.9293 70.6586 67.0201 75.3833 64.7783 78.9781C62.5351 82.5667 57.8085 83.658 54.2222 81.4151C50.6325 79.1674 49.3024 74.498 51.5439 70.909C52.0984 70.0224 52.6835 69.3141 53.3711 68.7716L47.1948 42.0192C46.339 41.833 45.5043 41.4566 44.6147 40.8986C41.8972 39.2007 40.7359 36.0542 41.2422 33.0787L27.708 24.5666L5.30755 60.4621C3.42355 63.48 4.35637 67.4501 7.3723 69.3351L59.7343 102.055C62.7485 103.94 66.7243 103.022 68.6112 100.006L101.171 47.8882C103.055 44.871 102.139 40.8946 99.1243 39.0101Z" fill="#F34F29" />
      </g>
      <defs>
        <filter id="filter0_df_101_180" x="0.33313" y="0.309097" width="114.817" height="107.725" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="8" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_180" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_180" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect2_foregroundBlur_101_180" />
        </filter>
      </defs>
    </svg>
  );
}

GitLogo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string.isRequired,
};
