/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function VSCodeLogo(
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
      <g clipPath="url(#clip0_185_29)">
        <path d="M0.94956 34.5818C0.94956 34.5818 -1.48362 32.8206 1.43989 30.4718L8.2467 24.3676C8.2467 24.3676 10.1968 22.3106 12.257 24.1039L75.0961 71.7933V94.6622C75.0961 94.6622 75.0648 98.2537 70.4685 97.8582L0.94956 34.5818Z" fill="#2489CA" />
        <path d="M17.1491 49.3207L0.94956 64.0814C0.94956 64.0814 -0.714361 65.3217 0.94956 67.5419L8.47016 74.3961C8.47016 74.3961 10.2563 76.3213 12.8976 74.1324L30.0666 61.0799L17.1491 49.3207Z" fill="#1070B3" />
        <path d="M45.5844 49.4429L75.2882 26.7067L75.0961 3.96082C75.0961 3.96082 73.8277 -1.00362 69.5955 1.58229L30.0666 37.6427L45.5844 49.4429Z" fill="#0877B9" />
        <path d="M70.4677 97.8863C72.1919 99.6571 74.2834 99.076 74.2834 99.076L97.4312 87.644C100.395 85.6183 99.9802 83.1064 99.9802 83.1064V14.8253C99.9802 11.823 96.916 10.7869 96.916 10.7869L76.8517 1.09196C72.4684 -1.62417 69.5955 1.58229 69.5955 1.58229C69.5955 1.58229 73.2875 -1.0848 75.0961 3.96082V94.245C75.0961 94.8663 74.9643 95.4748 74.7006 96.0246C74.1733 97.0953 73.0239 98.0905 70.2764 97.6733L70.4677 97.8863Z" fill="#3C99D4" />
      </g>
      <defs>
        <clipPath id="clip0_185_29">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
}

VSCodeLogo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};
