/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function FlutterLogo(
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
      <path d="M10 48.6364L57.5188 0H86.7726L24.7011 63.3333L10 48.6364ZM57.5188 96.9697H86.7726L61.4539 71.1364L86.7726 44.7727H57.5188L32.2002 70.8333L57.5188 96.9697Z" fill="#3FB6D3" />
      <path d="M63.6814 74.1666L48.8318 59.0151L34.4277 73.8636L48.8318 88.7121L63.6814 74.1666Z" fill="#27AACD" />
      <path d="M89 100L63.6814 74.1666L48.8318 88.7121L59.7462 100H89Z" fill="#19599A" />
      <path d="M48.8318 88.7121L71.7002 82.3484L63.6814 74.1666L48.8318 88.7121Z" fill="url(#paint0_linear_177_93)" />
      <defs>
        <linearGradient id="paint0_linear_177_93" x1="47.1723" y1="91.1818" x2="67.7854" y2="78.7035" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1B4E94" />
          <stop offset="0.63" stopColor="#1A5497" />
          <stop offset="1" stopColor="#195A9B" />
        </linearGradient>
      </defs>
    </svg>

  );
}

FlutterLogo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};
