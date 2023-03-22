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
      <path
        d="M69.2891 68.8359C62.2578 83.2109 49.9453 92.8828 33.6563 96.0625C31.1587
      96.6744 28.5948 96.9736 26.0234 96.9531C16.6484 96.9531 8.05469 93.0469 3.88281
      86.6484C-1.71875 78.125 -3.625 60.0547 14.8438 46.6875C15.2187 48.7266 15.9844
      51.5234 16.4922 53.1797C12.8667 55.8732 9.89904 59.3537 7.8125 63.3594C4.375 70.1094
      4.75781 76.8516 8.82813 83.0859C11.6406 87.2891 16.0938 89.8438 21.8203 90.625C28.9729
      91.5303 36.2292 90.1638 42.5625 86.7188C52.4922 81.5 59.1094 75.2656 63.4375
      66.7422C62.2136 65.4775 61.4893 63.8123 61.3984 62.0547C61.333 60.1686 62.0185
      58.3337 63.3045 56.9525C64.5905 55.5713 66.3719 54.7567 68.2578 54.6875H68.5234C70.3578
      54.6783 72.1255 55.3746 73.4607 56.6324C74.796 57.8902 75.5966 59.6131 75.697 61.4447C75.7973 63.2764 75.1898 65.0765 73.9999 66.4726C72.8101 67.8687 71.1291 68.754 69.3047 68.9453L69.2891 68.8359ZM91.6875 53.0547C101.227 63.8672 101.484 76.5938 97.7969 83.9766C94.3594 90.7187 85.2969 97.4688 73.1094 97.4688C67.42 97.3527 61.8232 96.0068 56.7031 93.5234C58.4922 92.25 61.0313 90.2109 62.4297 88.9375C66.378 90.648 70.6271 91.5562 74.9297 91.6094C82.8203 91.6094 88.7969 87.9219 92.3594 81.1797C94.6484 76.7266 94.7812 71.5078 92.6172 66.1641C89.9618 59.4405 85.2366 53.7358 79.125 49.875C71.1068 44.4699 61.6543 41.5884 51.9844 41.6016H49.6953C49.1615 42.8346 48.2932 43.8935 47.1886 44.6584C46.084 45.4234 44.7873 45.8637 43.4453 45.9297H43.2031C41.347 45.9069 39.5729 45.1614 38.2576 43.8515C36.9423 42.5417 36.1895 40.7707 36.1589 38.9147C36.1284 37.0586 36.8227 35.2638 38.0942 33.9115C39.3657 32.5591 41.1144 31.7557 42.9688 31.6719H43.2266C44.5188 31.6728 45.7858 32.0299 46.8883 32.7039C47.9909 33.3778 48.8864 34.3426 49.4766 35.4922H51.5156C67.7656 35.4922 82.0312 41.7266 91.6875 53.0547ZM27.0391 71.0234C26.9053 69.7261 27.2196 68.4221 27.9297 67.3281C20.8047 54.9844 16.9922 39.3359 22.8437 23.0469C27.0391 10.8047 37.6016 2.53125 49.0547 2.53125C61.2734 2.53125 74 13.2266 75.5234 33.8359C73.6172 33.2031 70.8359 32.2734 69.1641 31.9297C68.75 25.1875 63.0547 8.39063 49.5625 8.64063C44.7266 8.77344 37.6016 11.0625 33.9375 15.7656C29.4052 21.3798 26.7686 28.2859 26.4062 35.4922C25.5474 45.3732 27.8657 55.2704 33.0234 63.7422C33.3082 63.6382 33.6117 63.5956 33.9141 63.6172H34.1641C36.0537 63.583 37.8796 64.3009 39.24 65.6129C40.6003 66.9249 41.3838 68.7236 41.418 70.6133C41.4522 72.503 40.7343 74.3288 39.4223 75.6892C38.1102 77.0495 36.3115 77.833 34.4219 77.8672H34.1641C32.3206 77.8606 30.5507 77.1429 29.2233 75.8636C27.896 74.5842 27.1135 72.842 27.0391 71V71.0234Z"
        fill="#764ABC"
      />
    </svg>

  );
}

FlutterLogo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};
