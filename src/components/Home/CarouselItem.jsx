import React from 'react';
import style from './styles/CarouselItem.module.css';

export default function CarouselItem() {
  return (
    <div
      className={ style['project-card'] }
    >
      aqui va el conteniaaaado de cada card
      {/* <div className={ style['project-card-frame'] } /> */}
    </div>
  );
}
