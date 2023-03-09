/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function FlutterLogo(
  { width = '105', height = '120', className },
) {
  return (
    <svg
      width={ width }
      height={ height }
      viewBox="0 0 107 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={ className }
    >
      <g filter="url(#filter0_df_101_157)">
        <path d="M4.9408 69.1609L40.3009 11.0817L68.8049 4.50105L22.5712 80.1742L4.9408 69.1609ZM62.1143 105.566L90.6183 98.9854L60.1374 79.5096L78.8765 48.1262L50.3726 54.7069L31.5652 85.795L62.1143 105.566Z" fill="#3FB6D3" />
        <path d="M62.9894 81.9612L45.112 70.5384L34.4173 88.2466L51.7924 99.4743L62.9894 81.9612Z" fill="#27AACD" />
        <path d="M93.4703 101.437L62.9894 81.9612L51.7924 99.4743L64.9664 108.018L93.4703 101.437Z" fill="#19599A" />
        <path d="M51.7924 99.4743L72.6432 88.1295L62.9894 81.9612L51.7924 99.4743Z" fill="url(#paint0_linear_101_172)" />
      </g>
      <defs>
        <filter
          id="filter0_df_101_157"
          x="0"
          y="0"
          width="122"
          height="120"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-8" dy="-4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_101_157"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_101_157"
            result="shape"
          />
          <feGaussianBlur stdDeviation="2" result="effect2_foregroundBlur_101_157" />
        </filter>
      </defs>
    </svg>
  );
}

FlutterLogo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string.isRequired,
};
