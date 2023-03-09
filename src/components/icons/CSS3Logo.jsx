/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function CSS3Logo(
  { width = '115', height = '120', className },
) {
  return (
    <svg
      width={ width }
      height={ height }
      viewBox="0 0 115 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={ className }
    >
      <g filter="url(#filter0_df_101_156)">
        <path d="M44.5431 108.472L18 28.4741L99.2563 10L111 93.3498L79.8543 110L44.5431 108.472Z" fill="#1572B6" />
        <path d="M78.2767 103.045L103.444 89.5906L93.4092 18.3638L60.1947 25.9153L78.2767 103.045Z" fill="#33A9DC" />
        <path d="M67.1321 55.5073L80.5929 52.4469L79.1177 41.9773L64.7272 45.2491L62.3787 35.2314L87.8868 29.432L92.2439 60.3496L69.4806 65.525L67.1321 55.5073Z" fill="white" />
        <path d="M73.2916 81.5103L73.2498 81.5335L61.215 81.0968L58.6175 73.2719L48.4075 75.5932L53.5196 90.9987L75.6918 91.9565L75.7351 91.9329L73.2916 81.5103Z" fill="#EBEBEB" />
        <path d="M81.9773 62.2378L83.897 75.9317L73.2585 81.5272L75.7019 91.9498L95.2215 81.517L92.1828 59.9175L81.9773 62.2378Z" fill="white" />
        <path d="M62.4132 35.2236L64.7617 45.2413L40.1907 50.8276L36.9316 41.0169L62.4132 35.2236ZM67.1324 55.5087L69.4809 65.5264L58.2949 68.0696L55.9087 60.8916L55.0359 58.2589L67.1324 55.5087Z" fill="#EBEBEB" />
      </g>
      <defs>
        <filter id="filter0_df_101_156" x="0" y="0" width="115" height="120" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-8" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_156" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_156" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect2_foregroundBlur_101_156" />
        </filter>
      </defs>
    </svg>
  );
}

CSS3Logo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string.isRequired,
};
