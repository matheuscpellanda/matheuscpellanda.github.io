/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function FirebaseLogo(
  { width = '128', height = '118', className },
) {
  return (
    <svg
      width={ width }
      height={ height }
      viewBox="0 0 128 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={ className }
    >
      <g filter="url(#filter0_df_101_174)">
        <path d="M12.4312 109.594L9.57597 110.253L4.47242 88.1472L17.389 85.1652L18.0186 87.8922L7.95725 90.2151L9.63473 97.481L18.7353 95.38L19.3481 98.0345L10.2657 100.131L12.4494 109.59L12.4312 109.594ZM23.0381 87.22C22.7383 87.6996 22.3018 88.0008 21.7489 88.1284C21.196 88.2561 20.6626 88.1788 20.1919 87.8771C19.7122 87.5775 19.411 87.1413 19.2834 86.5887C19.1559 86.036 19.2333 85.5028 19.5352 85.0324C19.835 84.5528 20.2715 84.2516 20.8244 84.124C21.3773 83.9963 21.9107 84.0736 22.3814 84.3753C22.852 84.6769 23.1623 85.1111 23.2899 85.6637C23.4175 86.2164 23.3226 86.7154 23.0381 87.22ZM27.4054 106.137L24.5593 106.794L21.0662 91.6641L23.9124 91.007L27.4054 106.137ZM33.3426 104.766L30.4964 105.423L27.0034 90.2934L29.7317 89.6636L30.3006 92.1278L30.4185 92.1006C30.5182 91.2092 30.9435 90.4049 31.7356 89.659C32.5096 88.9173 33.3191 88.4536 34.1621 88.259C35.005 88.0644 35.7392 88.0189 36.3668 88.1317L35.8919 91.0374C35.4959 90.9761 34.9715 91.0208 34.3189 91.1715C33.2765 91.4122 32.4823 92.0249 31.875 93.0335C31.2677 94.0421 31.1226 95.1921 31.4238 96.4967L33.3335 104.768L33.3426 104.766ZM46.8386 102.185C44.5453 102.714 42.5093 102.373 40.7349 101.18C38.9604 99.9862 37.7897 98.2238 37.2543 95.9045C36.7481 93.7121 37.0047 91.6393 38.0144 89.7267C39.0512 87.8078 40.6256 86.6046 42.801 86.1023C45.049 85.5833 47.002 85.8959 48.6914 87.0518C50.3829 88.2167 51.5124 90.0076 52.0751 92.4447L52.1713 92.9855L40.2155 95.7457C40.6394 97.251 41.4524 98.3325 42.5749 99.0181C43.7247 99.6974 44.9128 99.8811 46.1637 99.5923C48.1941 99.1236 49.3892 97.9316 49.7127 96.0247L52.4955 96.4987C52.2891 97.7965 51.6859 98.9472 50.7369 100.006C49.7901 101.074 48.4792 101.806 46.8386 102.185ZM48.6425 91.3477C48.3692 90.4947 47.7891 89.7603 46.8862 89.1576C45.9833 88.5549 44.7993 88.3893 43.349 88.7241C42.2885 88.969 41.4685 89.5113 40.8487 90.3415C40.2288 91.1717 39.9011 92.1921 39.8662 93.3643L48.6425 91.3477ZM63.9429 98.236C62.7827 98.5038 61.6929 98.4978 60.6512 98.2039C59.6248 97.9351 58.7986 97.4578 58.1739 96.8196L58.056 96.8468L58.5413 98.9486L55.8129 99.5785L50.7094 77.4726L53.5556 76.8155L55.1661 83.7916L55.5335 85.9206L55.6514 85.8934C55.9401 85.0347 56.4728 84.2819 57.2711 83.5632C58.0758 82.8717 59.0554 82.3593 60.2156 82.0914C62.1735 81.6394 64.0373 82.0202 65.8271 83.2388C67.6079 84.4595 68.7451 86.2009 69.2742 88.493C69.8034 90.7852 69.5468 92.8579 68.4793 94.7266C67.409 96.6246 65.9008 97.784 63.9429 98.236ZM62.8531 95.7488C64.1856 95.4412 65.2015 94.6723 65.9162 93.4671C66.6309 92.2619 66.8038 90.8192 66.4253 89.1794C66.0467 87.5396 65.2588 86.3187 64.0881 85.5488C62.9174 84.7789 61.6673 84.5332 60.3348 84.8408C59.0024 85.1484 57.9621 85.8944 57.2676 87.1044C56.5801 88.3033 56.3981 89.7481 56.7829 91.4151C57.1678 93.0821 57.9354 94.2981 59.1082 95.077C60.2838 95.8267 61.5298 96.0543 62.8531 95.7488ZM78.2101 94.9421C76.5876 95.3167 75.1575 95.1602 73.8523 94.4691C72.5533 93.8052 71.7341 92.6965 71.3827 91.1745C71.0041 89.5346 71.3283 88.0856 72.3889 86.8483C73.4494 85.6111 74.9109 84.787 76.7962 84.3517C78.4641 83.9667 79.915 83.9657 81.1136 84.3188L81.0132 83.8839C80.7559 82.7695 80.1612 81.9717 79.2611 81.4638C78.3337 80.9622 77.3318 80.8404 76.2259 81.0957C75.4011 81.2861 74.7017 81.648 74.1118 82.1945C73.522 82.741 73.1901 83.3711 73.1085 84.1343L70.2407 83.6226C70.392 82.6239 70.8815 81.6425 71.737 80.6338C72.6016 79.6231 73.8623 78.9217 75.5482 78.5325C77.4789 78.0868 79.229 78.2648 80.7706 79.1113C82.3102 79.9487 83.3037 81.3988 83.7785 83.4554L85.8952 92.6239L83.1669 93.2538L82.6816 91.152L82.5638 91.1792C81.8526 93.1851 80.3855 94.4399 78.2101 94.9421ZM78.0721 92.2352C79.2595 91.9611 80.2196 91.2814 80.9615 90.194C81.7306 89.1004 81.9726 87.9566 81.6923 86.7426C80.744 86.2745 79.4611 86.2176 77.8386 86.5921C76.4608 86.9102 75.4944 87.4387 74.9275 88.209C74.3697 88.9771 74.1682 89.7584 74.3523 90.5557C74.5259 91.3076 74.977 91.8142 75.73 92.0984C76.4719 92.3756 77.2472 92.4257 78.0721 92.2352ZM93.9367 91.3114C92.2416 91.7027 90.7516 91.6173 89.4736 91.0439C88.2165 90.5069 87.1344 89.6298 86.3492 88.5112L88.6425 86.8653C89.8794 88.5837 91.4747 89.2078 93.4054 88.7621C94.3028 88.5549 94.984 88.1972 95.447 87.68C95.9099 87.1628 96.0787 86.5703 95.9323 85.9362C95.7043 84.9486 94.8495 84.4303 93.3943 84.4132L90.15 84.3797C89.1236 84.359 88.0973 84.0901 87.0702 83.6116C86.039 83.1148 85.3906 82.2912 85.1187 81.1134C84.8112 79.7816 85.1696 78.5633 86.1514 77.4396C87.1443 76.3229 88.4439 75.5839 90.0846 75.2051C91.417 74.8975 92.6958 74.9363 93.8672 75.2957C95.0678 75.6578 96.021 76.3539 96.7175 77.3859L94.4863 78.9698C93.6259 77.7657 92.3109 77.3631 90.5705 77.7649C89.7275 77.9595 89.0603 78.2949 88.5729 78.7891C88.0764 79.2854 87.893 79.8145 88.0311 80.4124C88.2319 81.2822 89.0456 81.705 90.4422 81.7166L93.5945 81.7236C95.0949 81.7303 96.267 82.0513 97.149 82.6875C98.0129 83.3278 98.5595 84.1654 98.7938 85.1801C99.1055 86.53 98.814 87.7901 97.9124 88.9716C97.0269 90.1399 95.6951 90.9054 93.9367 91.3114ZM108.793 87.8815C106.5 88.4109 104.464 88.0699 102.689 86.8764C100.915 85.6829 99.7442 83.9205 99.2087 81.6012C98.7025 79.4087 98.9592 77.336 99.9688 75.4234C101.006 73.5045 102.58 72.3013 104.755 71.799C107.003 71.28 108.956 71.5926 110.646 72.7484C112.337 73.9134 113.467 75.7043 114.03 78.1414L114.126 78.6822L102.17 81.4424C102.594 82.9477 103.407 84.0292 104.529 84.7148C105.679 85.3941 106.867 85.5778 108.118 85.289C110.149 84.8203 111.344 83.6282 111.667 81.7213L114.45 82.1954C114.244 83.4932 113.64 84.6439 112.691 85.7028C111.735 86.7728 110.434 87.5027 108.793 87.8815ZM110.588 77.0465C110.315 76.1935 109.735 75.459 108.832 74.8564C107.929 74.2537 106.745 74.0881 105.294 74.4229C104.234 74.6677 103.414 75.2101 102.794 76.0403C102.174 76.8705 101.846 77.8909 101.812 79.0631L110.588 77.0465ZM25.9204 52.8498L22.5833 6.59382C22.4766 5.01527 24.4324 4.18203 25.4644 5.38474L36.1872 17.6717L25.9204 52.8498ZM77.9785 52.2538L61.8315 12.6674C61.3371 11.436 59.6114 11.2809 58.9002 12.4185L26.7018 64.092L52.9009 71.7468C54.5262 72.2113 56.33 71.7949 57.5872 70.6649L77.9785 52.2538ZM50.8622 20.7346L43.1389 11.763C42.2729 10.7415 40.6323 11.1203 40.2927 12.4201L26.4035 59.9048L50.8622 20.7346Z" fill="#F58220" />
      </g>
      <defs>
        <filter id="filter0_df_101_174" x="0.472412" y="0.81282" width="126.978" height="116.44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="8" dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_174" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_174" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect2_foregroundBlur_101_174" />
        </filter>
      </defs>
    </svg>
  );
}

FirebaseLogo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string.isRequired,
};
