import React, { useContext, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import LanguageContext from '../../context/LanguageContext';
import style from './styles/PresentationText.module.css';
import homeTexts from '../../assets/texts/home-presentation-text.json';

const PRESENTATION_TEXT_CSS = 'presentation-text';

export default function PresentationText() {
  const { language } = useContext(LanguageContext);
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        ' web Developer',
        ' frontend Developer',
        ' backend Developer',
        ' mobile Developer',
        ' fullstack Developer',
        ' industrial Engineer',
      ],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    };

    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className={ style['presentation-info'] }>
      <h3 className={ style['hello-title'] }>
        Hello
        <strong>_</strong>
      </h3>
      <div className={ style['typed-title'] }>
        <p>
          { 'I\'m' }
        </p>
        <span ref={ el } />
      </div>
      <p className={ style[PRESENTATION_TEXT_CSS] }>
        {homeTexts[language]['first-text']}
      </p>
      <p className={ style[PRESENTATION_TEXT_CSS] }>
        {homeTexts[language]['second-text']}
      </p>
      <p className={ style[PRESENTATION_TEXT_CSS] }>
        {homeTexts[language]['third-text']}
      </p>
      <p className={ style[PRESENTATION_TEXT_CSS] }>
        {homeTexts[language]['fourth-text']}
      </p>
      <input
        type="text"
        className={ style['input-email'] }
        placeholder={ homeTexts[language]['email-placeholder'] }
      />
      <div>
        <button type="button" className={ style['button-contact'] }>
          {homeTexts[language]['first-button']}
        </button>
        <button
          type="button"
          className={ style['button-projects'] }
        >
          {homeTexts[language]['second-button']}
        </button>
      </div>
      <div className={ style.light01 } />
      <div className={ style.light02 } />
    </div>
  );
}
