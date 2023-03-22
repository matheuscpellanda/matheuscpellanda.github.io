/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function ReactLogo(
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
      <rect width="100" height="100" fill="none" />
      <path d="M49.9063 58.5781C54.825 58.5781 58.8125 54.5907 58.8125 49.6719C58.8125 44.7531 54.825 40.7656 49.9063 40.7656C44.9875 40.7656 41 44.7531 41 49.6719C41 54.5907 44.9875 58.5781 49.9063 58.5781Z" fill="#61DAFB" />
      <path d="M83.7344 34.9844C82.0156 34.3594 80.2188 33.7344 78.3438 33.1875C78.8125 31.3125 79.2031 29.4375 79.5156 27.6406C81.1562 17.3281 79.3594 10.0625 74.3594 7.25C72.875 6.39062 71.2344 6 69.3594 6C63.8906 6 56.9375 10.0625 49.9062 16.8594C42.875 10.0625 35.9219 6 30.4531 6C28.5781 6 26.9375 6.39062 25.4531 7.25C20.4531 10.1406 18.6563 17.4062 20.2969 27.6406C20.6094 29.4375 21 31.3125 21.4688 33.1875C19.5938 33.7344 17.7969 34.2812 16.0781 34.9844C6.3125 38.7344 1 43.8906 1 49.6719C1 55.4531 6.39063 60.6094 16.0781 64.3594C17.7969 64.9844 19.5938 65.6094 21.4688 66.1562C21 68.0313 20.6094 69.9062 20.2969 71.7031C18.6563 82.0156 20.4531 89.2813 25.4531 92.0938C26.9375 92.9531 28.5781 93.3438 30.4531 93.3438C36 93.3438 42.9531 89.2813 49.9062 82.4844C56.9375 89.2813 63.8906 93.3438 69.3594 93.3438C71.2344 93.3438 72.875 92.9531 74.3594 92.0938C79.3594 89.2031 81.1562 81.9375 79.5156 71.7031C79.2031 69.9062 78.8125 68.0313 78.3438 66.1562C80.2188 65.6094 82.0156 65.0625 83.7344 64.3594C93.5 60.6094 98.8125 55.4531 98.8125 49.6719C98.8125 43.8906 93.5 38.7344 83.7344 34.9844V34.9844ZM72.1719 11.1562C75.375 13.0312 76.4688 18.8125 75.1406 27.0156C74.9063 28.6562 74.5156 30.375 74.0469 32.1719C69.9844 31.2344 65.6875 30.6094 61.1562 30.2187C58.5 26.4687 55.7656 23.1094 53.0312 20.0625C58.8125 14.3594 64.6719 10.4531 69.4375 10.4531C70.4531 10.4531 71.3906 10.6875 72.1719 11.1562V11.1562ZM63.4219 57.4844C62.0156 59.9844 60.375 62.4844 58.6562 64.9844C55.7656 65.2188 52.875 65.2969 49.9062 65.2969C46.8594 65.2969 43.9687 65.2188 41.1562 64.9844C39.4375 62.4844 37.875 59.9844 36.4687 57.4844C34.9844 54.9063 33.5781 52.25 32.3281 49.6719C33.5781 47.0938 34.9844 44.4375 36.4687 41.8594C37.875 39.3594 39.5156 36.8594 41.2344 34.3594C44.125 34.125 47.0156 34.0469 49.9844 34.0469C53.0312 34.0469 55.9219 34.125 58.7344 34.3594C60.4531 36.8594 62.0156 39.3594 63.4219 41.8594C64.9063 44.4375 66.3125 47.0938 67.5625 49.6719C66.2344 52.25 64.9063 54.8281 63.4219 57.4844ZM69.9062 54.9062C71.0781 57.6406 72.0156 60.2969 72.875 62.9531C70.2187 63.5781 67.4062 64.0469 64.4375 64.4375C65.375 62.9531 66.3906 61.3906 67.25 59.75C68.1875 58.1094 69.0469 56.4687 69.9062 54.9062ZM49.9062 76.0781C48.0312 74.0469 46.2344 71.8594 44.5156 69.5938C46.3125 69.6719 48.1094 69.75 49.9062 69.75C51.7031 69.75 53.5 69.6719 55.2969 69.5938C53.5781 71.8594 51.7812 74.0469 49.9062 76.0781ZM35.375 64.3594C32.4063 63.9688 29.5937 63.5 26.9375 62.875C27.7969 60.2969 28.7344 57.5625 29.9062 54.8281C30.7656 56.3906 31.625 58.0312 32.5625 59.5937C33.5 61.3125 34.4375 62.7969 35.375 64.3594V64.3594ZM29.9062 44.4375C28.7344 41.7031 27.7969 39.0469 26.9375 36.3906C29.5937 35.7656 32.4063 35.2969 35.375 34.9062C34.4375 36.3906 33.4219 37.9531 32.5625 39.5938C31.625 41.2344 30.7656 42.875 29.9062 44.4375V44.4375ZM49.9062 23.2656C51.7812 25.2969 53.5781 27.4844 55.2969 29.75C53.5 29.6719 51.7031 29.5937 49.9062 29.5937C48.1094 29.5937 46.3125 29.6719 44.5156 29.75C46.2344 27.4844 48.0312 25.2969 49.9062 23.2656ZM67.25 39.6719L64.4375 34.9844C67.4062 35.375 70.2187 35.8437 72.875 36.4688C72.0156 39.0469 71.0781 41.7813 69.9062 44.5156C69.0469 42.875 68.1875 41.2344 67.25 39.6719ZM24.6719 27.0156C23.3438 18.8125 24.4375 13.0312 27.6406 11.1562C28.4219 10.6875 29.3594 10.4531 30.375 10.4531C35.0625 10.4531 40.9219 14.2812 46.7812 20.0625C44.0469 23.0312 41.3125 26.4687 38.6562 30.2187C34.125 30.6094 29.8281 31.3125 25.7656 32.1719C25.2969 30.375 24.9844 28.6562 24.6719 27.0156V27.0156ZM5.375 49.6719C5.375 46 9.82813 42.0938 17.6406 39.2031C19.2031 38.5781 20.9219 38.0313 22.6406 37.5625C23.8906 41.4688 25.4531 45.6094 27.3281 49.75C25.4531 53.8906 23.8125 57.9531 22.6406 61.8594C11.8594 58.7344 5.375 54.0469 5.375 49.6719ZM27.6406 88.1875C24.4375 86.3125 23.3438 80.5313 24.6719 72.3281C24.9063 70.6875 25.2969 68.9688 25.7656 67.1719C29.8281 68.1094 34.125 68.7344 38.6562 69.125C41.3125 72.875 44.0469 76.2344 46.7812 79.2813C41 84.9844 35.1406 88.8906 30.375 88.8906C29.3594 88.8906 28.4219 88.6563 27.6406 88.1875ZM75.1406 72.3281C76.4688 80.5313 75.375 86.3125 72.1719 88.1875C71.3906 88.6563 70.4531 88.8906 69.4375 88.8906C64.75 88.8906 58.8906 85.0625 53.0312 79.2813C55.7656 76.3125 58.5 72.875 61.1562 69.125C65.6875 68.7344 69.9844 68.0313 74.0469 67.1719C74.5156 68.9688 74.8281 70.6875 75.1406 72.3281V72.3281ZM82.1719 60.1406C80.6094 60.7656 78.8906 61.3125 77.1719 61.7813C75.9219 57.875 74.3594 53.7344 72.4844 49.5938C74.3594 45.4531 76 41.3906 77.1719 37.4844C87.9531 40.6094 94.4375 45.2969 94.4375 49.6719C94.4375 53.3438 89.9063 57.25 82.1719 60.1406Z" fill="#61DAFB" />
    </svg>

  );
}

ReactLogo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};