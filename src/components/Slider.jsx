import PropTypes from 'prop-types';
import React from 'react';
import style from './styles/Slider.module.css';

export default function Slider({ children }) {
  return (
    <div className={ style.slider }>
      <div className={ style.container }>
        {
          children
        }
      </div>
      <div className={ style.container2 }>
        {
          children
        }
      </div>
    </div>
  );
}

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
