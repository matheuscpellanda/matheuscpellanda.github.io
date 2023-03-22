/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function FigmaLogo(
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
      <path d="M33.6667 100C42.8915 100 50.3333 92.5581 50.3333 83.3333V66.6667H33.6667C24.4419 66.6667 17 74.1085 17 83.3333C17 92.5581 24.4419 100 33.6667 100Z" fill="#0ACF83" />
      <path d="M17 50C17 40.7752 24.4419 33.3333 33.6667 33.3333H50.3333V66.6667H33.6667C24.4419 66.6667 17 59.2248 17 50Z" fill="#A259FF" />
      <path d="M17 16.6667C17 7.44186 24.4419 0 33.6667 0H50.3333V33.3333H33.6667C24.4419 33.3333 17 25.8915 17 16.6667Z" fill="#F24E1E" />
      <path d="M50.3333 0H67C76.2248 0 83.6667 7.44186 83.6667 16.6667C83.6667 25.8915 76.2248 33.3333 67 33.3333H50.3333V0Z" fill="#FF7262" />
      <path d="M83.6667 50C83.6667 59.2248 76.2248 66.6667 67 66.6667C57.7752 66.6667 50.3333 59.2248 50.3333 50C50.3333 40.7752 57.7752 33.3333 67 33.3333C76.2248 33.3333 83.6667 40.7752 83.6667 50Z" fill="#1ABCFE" />
    </svg>
  );
}

FigmaLogo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};
