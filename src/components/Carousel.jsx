import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import CarouselController from './CarouselController';
import style from './styles/Carousel.module.css';

const TIME_ANIMATION = 200;

export default function Carousel({ children = [] }) {
  const [currentItem, setCurrentItem] = useState(0);
  const [onChangingItem, setOnChangingItem] = useState(false);
  const [hasTouched, setHasTouched] = useState(false);
  const [whereTouchStarts, setWhereTouchStarts] = useState({ x: 0, y: 0 });
  const [whereTouchEnds, setWhereTouchEnds] = useState({ x: 0, y: 0 });

  const handleTouchStarts = useCallback(({ touches }) => {
    if (!hasTouched) {
      setHasTouched(true);
      setWhereTouchStarts({ x: touches[0].clientX, y: touches[0].clientY });
    }
  }, [hasTouched]);

  const handleTouchEnds = useCallback(() => {
    setHasTouched(false);
    setWhereTouchStarts({ x: 0, y: 0 });
    setWhereTouchEnds({ x: 0, y: 0 });
    const precisionX = 50;
    const toleranceY = 150;
    if (Math.abs(whereTouchStarts.x - whereTouchEnds.x) < precisionX
    || Math.abs(whereTouchStarts.y - whereTouchEnds.y) > toleranceY) return;
    setOnChangingItem(true);
    setTimeout(() => {
      setOnChangingItem(false);
    }, TIME_ANIMATION);
    if (whereTouchStarts.x > whereTouchEnds.x) {
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
        onTouchMove={
          (({ touches }) => setWhereTouchEnds(
            { x: touches[0].clientX, y: touches[0].clientY },
          ))
        }
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
