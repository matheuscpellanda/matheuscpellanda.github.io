import PropTypes from 'prop-types';
import React from 'react';

export default function LinkedinIcon({ color = 'white', width = '36', height = '36' }) {
  return (
    <svg width={ width } height={ height } viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.942 18C36.942 27.9411 28.8831 36 18.942 36C9.00089
        36 0.942017 27.9411 0.942017 18C0.942017 8.05887 9.00089 0
        18.942 0C28.8831 0 36.942 8.05887 36.942 18ZM8.78889
        28.5H13.1426V14.4794H8.78889V28.5ZM8.44202 10.0215C8.44202
        11.4137 9.57123 12.5668 10.9634 12.5668C12.3551 12.5668 13.4848
        11.4137 13.4848 10.0215C13.4848 9.35273 13.2192 8.71139 12.7463
        8.23852C12.2735 7.76565 11.6321 7.5 10.9634 7.5C10.2947 7.5
        9.65338 7.76565 9.18052 8.23852C8.70766 8.71139 8.44202 9.35273
        8.44202 10.0215ZM25.093 28.5H29.442V20.7983C29.442 17.0294 28.632
        14.1278 24.2258 14.1278C22.1075 14.1278 20.6876 15.2903 20.1064
        16.3919H20.0455V14.4794H15.8698V28.5H20.2189V21.5577C20.2189 19.7295
        20.5658 17.9623 22.8294 17.9623C25.0601 17.9623 25.093 20.0482 25.093
        21.6748V28.5Z"
        fill={ color }
      />
    </svg>
  );
}

LinkedinIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
