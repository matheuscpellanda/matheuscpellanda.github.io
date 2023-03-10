import React, { useContext } from 'react';
import style from './styles/MainProjects.module.css';
import LanguageContext from '../../context/LanguageContext';
import homeTexts from '../../assets/texts/home-presentation-text.json';
import homeCards from '../../assets/texts/home-cards.json';
import Carousel from '../Carousel';
import CarouselItem from '../CarouselItem';

export default function MainProjects() {
  const { language } = useContext(LanguageContext);
  return (
    <div className={ style['main-projects'] }>
      <h1 className={ style['second-section-title'] }>
        {homeTexts[language]['second-section-title']}
      </h1>
      <Carousel>
        {
          homeCards.map((card) => (
            <CarouselItem
              key={ card.id }
              text={ card[language].text }
              image={ card.image }
            />
          ))
        }
      </Carousel>
    </div>
  );
}
