import PropTypes from 'prop-types';
import React from 'react';

export default function FacebookIcon({ color = 'white', width = '36', height = '36' }) {
  return (
    <svg width={ width } height={ height } viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5189 0C28.4601 0 36.5189 8.10812 36.5189 18.11C36.5189 27.1492
        29.9366 34.6414 21.3314 36V23.3449H25.5256L26.3236 18.11H21.3314V14.7128C21.3314
        14.3283 21.3817 13.9463 21.4985 13.5933C21.7624 12.796 22.366 12.1462 23.4968
        11.9475C23.7298 11.9065 23.9853 11.8847 24.2648 11.8847H26.5345V7.42793C26.5345
        7.42793 24.4747 7.07422 22.5053 7.07422C18.3937 7.07422 15.7064 9.58133 15.7064
        14.1201V18.11H11.1361V23.3449H15.7064V36C7.1013 34.6414 0.518921 27.1492 0.518921
        18.11C0.518921 8.10812 8.57779 0 18.5189 0Z"
        fill={ color }
      />
    </svg>
  );
}

FacebookIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
