import PropTypes from 'prop-types';
import React from 'react';
import style from './styles/CarouselController.module.css';

export default function CarouselController({ itemCount = 0, currentItem = 0 }) {
  const novoArray = Array.from({ length: itemCount }, (_, index) => index);
  return (
    <div className={ style['carousel-controller'] }>
      {
        novoArray.map((item) => (
          <div
            className={ currentItem === item ? style['selected-bullet'] : style.bullet }
            key={ item }
          />
        ))
      }
    </div>
  );
}

CarouselController.propTypes = {
  itemCount: PropTypes.number,
  currentItem: PropTypes.number,
};
