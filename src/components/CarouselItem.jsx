import PropTypes from 'prop-types';
import React from 'react';
import style from './styles/CarouselItem.module.css';

export default function CarouselItem({ text = '' }) {
  return (
    <div
      className={ style['project-card'] }
    >
      <div className={ style['project-container-frame'] } />
      <div className={ style['project-text-container'] } />
      <span className={ style['project-text'] }>{text}</span>
    </div>
  );
}

CarouselItem.propTypes = {
  text: PropTypes.string,
};
