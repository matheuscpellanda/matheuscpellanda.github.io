import React, { useContext } from 'react';
import style from './styles/Navbar.module.css';
import GitHubIcon from './icons/GitHubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import FacebookIcon from './icons/FacebookIcon';
import LanguageContext from '../context/LanguageContext';
import homeTexts from '../assets/texts/home-presentation-text.json';

const ICON_BUTTON_CSS = 'icon-button';
const NAVBAR_BUTTON_CSS = 'navbar-button';

export default function Navbar() {
  const { language, setNextLanguage, languageIcon } = useContext(LanguageContext);
  return (
    <header className={ style.header }>
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
    </header>
  );
}
