import React, { useContext, useState } from 'react';
import style from './styles/MainProjects.module.css';
import LanguageContext from '../../context/LanguageContext';
import homeTexts from '../../assets/texts/home-presentation-text.json';
import CarouselItem from './CarouselItem';
import CarouselController from './CarouselController';

const interval = [];

export default function MainProjects() {
  const [currentItem, setCurrentItem] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasTouched, sethasTouched] = useState(false);
  const { language } = useContext(LanguageContext);
  const screenMargins = 0.9;
  const screenWidth = window.innerWidth * screenMargins;
  const maxTime = 500;
  const minTime = 300;

  const setNewScroll = () => {
    const c = window.document.getElementById('carousel-01');
    const { scrollLeft } = c;
    const newScroll = Math.round(scrollLeft / screenWidth);
    interval.forEach((item) => clearTimeout(item));
    interval.splice(0);
    setCurrentItem(newScroll);
    sethasTouched(false);
    c.scrollLeft = (newScroll) * screenWidth;
    setTimeout(() => {
      if (scrollLeft !== ((newScroll) * screenWidth)) {
        c.scrollLeft = (newScroll) * screenWidth;
      }
    }, minTime);
  };

  const onTouchEnd = () => {
    sethasTouched(true);
    if (hasScrolled) {
      setTimeout(() => {
        setNewScroll();
      }, maxTime);
      setHasScrolled(false);
    }
  };

  const onScroll = () => {
    setHasScrolled(false);
    sethasTouched(false);
    if (hasTouched) {
      setTimeout(() => {
        setNewScroll();
      }, maxTime);
    } else {
      setHasScrolled(true);
    }
  };

  return (
    <div className={ style['main-projects'] }>
      <h1 className={ style['second-section-title'] }>
        {homeTexts[language]['second-section-title']}
      </h1>
      <div
        id="carousel-01"
        className={ style['projects-carousel'] }
        onScroll={ onScroll }
        onTouchEnd={ onTouchEnd }
      >
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </div>
      <CarouselController itemCount={ 3 } currentItem={ currentItem } />
    </div>
  );
}
