/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

export default function TrelloLogo(
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
      <path d="M0 17.4603C0 7.81725 7.81725 0 17.4603 0H82.5397C92.1827 0 100 7.81725 100 17.4603V82.5397C100 92.1827 92.1827 100 82.5397 100H17.4603C7.81725 100 0 92.1827 0 82.5397V17.4603Z" fill="white" />
      <path d="M100 12.0175C100 5.38016 94.6198 0 87.9825 0H12.0175C5.38016 0 0 5.38016 0 12.0175V87.9818C0 94.6198 5.38016 100 12.0175 100H87.9825C94.6198 100 100 94.6198 100 87.9818V12.0175ZM45.2381 78.2064C45.2381 81.2278 42.6302 83.3333 39.6087 83.3333H17.9071C14.8857 83.3333 12.6984 81.2278 12.6984 78.2064V17.6429C12.6984 14.6206 14.8857 11.9048 17.9071 11.9048H39.6087C42.6302 11.9048 45.2381 14.6206 45.2381 17.6429V78.2064ZM88.8889 50.7698C88.8889 53.7913 86.5587 56.3492 83.5365 56.3492H61.846C58.8238 56.3492 56.3492 53.7905 56.3492 50.7698V17.354C56.3492 14.3317 58.8238 11.9048 61.846 11.9048H83.5365C86.5587 11.9048 88.8889 14.3317 88.8889 17.354V50.7698Z" fill="#23719F" />
    </svg>

  );
}

TrelloLogo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};
