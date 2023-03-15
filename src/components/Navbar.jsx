import React, { useCallback, useContext, useEffect } from 'react';
import style from './styles/Navbar.module.css';
import GitHubIcon from './icons/GitHubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import FacebookIcon from './icons/FacebookIcon';
import LanguageContext from '../context/LanguageContext';
import homeTexts from '../assets/texts/home-presentation-text.json';

const ICON_BUTTON_CSS = 'icon-button';
const NAVBAR_BUTTON_CSS = 'navbar-button';
const HEADER_OPEN_CSS = 'header-open';

export default function Navbar() {
  const { language, setNextLanguage, languageIcon } = useContext(LanguageContext);

  const scrollOnTop = useCallback(() => {
    const closedMenu = document.querySelector(`.${style.header}`);
    if (closedMenu) {
      if (window.scrollY > 0) {
        document.querySelector(`.${style.header}`).classList.add(style.scrolled);
      } else {
        document.querySelector(`.${style.header}`).className = style.header;
      }
    } else {
      const openedMenu = document.querySelector(`.${style[HEADER_OPEN_CSS]}`);
      openedMenu.className = style.header;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollOnTop);
  }, [scrollOnTop]);

  const handleCloseMenu = () => {
    const openedMenu = document.querySelector(`.${style[HEADER_OPEN_CSS]}`);
    if (openedMenu) {
      openedMenu.className = style.header;
    }
  };

  const handleOpenMenu = () => {
    const closedMenu = document.querySelector(`.${style.header}`);
    const openedMenu = document.querySelector(`.${style[HEADER_OPEN_CSS]}`);
    if (closedMenu) {
      closedMenu.className = style[HEADER_OPEN_CSS];
    } else if (openedMenu) {
      openedMenu.className = style.header;
    }
  };

  return (
    <header className={ style.header }>
      <button
        type="button"
        className={ style['header-button'] }
        onClick={ handleOpenMenu }
      >
        {' '}
      </button>
      <div
        className={ style['header-touchable'] }
        onTouchEnd={ handleCloseMenu }
      />
      <div className={ style['header-options'] }>
        <button
          type="button"
          className={ style[ICON_BUTTON_CSS] }
          onClick={ setNextLanguage }
        >
          { languageIcon }
        </button>
        <button type="button" className={ style[NAVBAR_BUTTON_CSS] }>
          {homeTexts[language].about}
        </button>
        <button type="button" className={ style[NAVBAR_BUTTON_CSS] }>
          {homeTexts[language].working}
        </button>
        <button type="button" className={ style[NAVBAR_BUTTON_CSS] }>
          {homeTexts[language].projects}
        </button>
        <button type="button" className={ style[NAVBAR_BUTTON_CSS] }>
          {homeTexts[language].contact}
        </button>
        <button type="button" className={ style[ICON_BUTTON_CSS] }>
          <GitHubIcon />
        </button>
        <button type="button" className={ style[ICON_BUTTON_CSS] }>
          <LinkedinIcon />
        </button>
        <button type="button" className={ style[ICON_BUTTON_CSS] }>
          <FacebookIcon />
        </button>
      </div>
    </header>
  );
}
