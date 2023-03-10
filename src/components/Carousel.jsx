import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import CarouselController from './CarouselController';
import style from './styles/Carousel.module.css';

const TIME_ANIMATION = 200;

export default function Carousel({ children = [] }) {
  const [currentItem, setCurrentItem] = useState(0);
  const [onChangingItem, setOnChangingItem] = useState(false);
  const [hasTouched, setHasTouched] = useState(false);
  const [whereTouchStarts, setWhereTouchStarts] = useState(0);
  const [whereTouchEnds, setWhereTouchEnds] = useState(0);

  const handleTouchStarts = useCallback(({ touches }) => {
    if (!hasTouched) {
      setHasTouched(true);
      setWhereTouchStarts(touches[0].clientX);
    }
  }, [hasTouched]);

  const handleTouchEnds = useCallback(() => {
    setHasTouched(false);
    setWhereTouchStarts(0);
    setWhereTouchEnds(0);
    const precision = 50;
    if (Math.abs(whereTouchStarts - whereTouchEnds) < precision) return;
    setOnChangingItem(true);
    setTimeout(() => {
      setOnChangingItem(false);
    }, TIME_ANIMATION);
    if (whereTouchStarts > whereTouchEnds) {
      const nextItem = currentItem === (children.length - 1) ? 0 : currentItem + 1;
      setCurrentItem(nextItem);
    } else {
      const previousItem = currentItem === 0 ? (children.length - 1) : currentItem - 1;
      setCurrentItem(previousItem);
    }
  }, [whereTouchEnds, whereTouchStarts, currentItem, children]);

  return (
    <div className={ style.carousel }>
      <div
        className={
          onChangingItem ? style['carousel-body-animating'] : style['carousel-body']
        }
        onTouchEnd={ handleTouchEnds }
        onTouchStart={ handleTouchStarts }
        onTouchMove={ (e) => setWhereTouchEnds(e.touches[0].clientX) }
      >
        { children[currentItem] }
      </div>
      <CarouselController itemCount={ children.length } currentItem={ currentItem } />
    </div>
  );
}

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
