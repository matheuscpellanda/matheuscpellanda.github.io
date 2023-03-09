import PropTypes from 'prop-types';
import React from 'react';

export default function GitHubIcon({ color = 'white', width = '36', height = '36' }) {
  return (
    <svg width={ width } height={ height } viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.365 0C8.41999 0 0.36499 8.26413 0.36499 18.457C0.36499
        26.6135 5.52199 33.5302 12.6725 35.9681C13.5725 36.1419 13.9025
        35.5713 13.9025 35.0806C13.9025 34.6423 13.8875 33.481 13.88
        31.9429C8.87299 33.0565 7.81699 29.4666 7.81699 29.4666C6.99799
        27.3364 5.81449 26.7673 5.81449 26.7673C4.18399 25.623 5.94049
        25.646 5.94049 25.646C7.74799 25.7752 8.69749 27.5471 8.69749
        27.5471C10.3025 30.3695 12.911 29.5543 13.94 29.0821C14.102
        27.8886 14.5655 27.0749 15.08 26.6135C11.0825 26.1521 6.88099
        24.5648 6.88099 17.4926C6.88099 15.4777 7.57849 13.832 8.73349
        12.54C8.53099 12.074 7.92349 10.1975 8.89099 7.65505C8.89099
        7.65505 10.3985 7.15978 13.841 9.54689C15.281 9.13622 16.811
        8.9332 18.341 8.92397C19.871 8.9332 21.401 9.13622 22.841 9.54689C26.261
        7.15978 27.7685 7.65505 27.7685 7.65505C28.736 10.1975 28.1285 12.074
        27.9485 12.54C29.096 13.832 29.7935 15.4777 29.7935 17.4926C29.7935 24.5832
        25.586 26.1444 21.581 26.5981C22.211 27.1518 22.796 28.2838 22.796 30.0126C22.796
        32.4828 22.7735 34.4669 22.7735 35.0668C22.7735 35.5513 23.0885 36.1281 24.011
        35.9435C31.2125 33.5226 36.365 26.6012 36.365 18.457C36.365 8.26413 28.3055
        0 18.365 0Z"
        fill={ color }
      />
    </svg>
  );
}

GitHubIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
