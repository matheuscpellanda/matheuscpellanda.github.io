import PropTypes from 'prop-types';
import React from 'react';
import style from './styles/MainProjectsCard.module.css';
import JavascriptLogo from '../icons/JavascriptLogo';
import FlutterLogo from '../icons/FlutterLogo';
import ReactLogo from '../icons/ReactLogo';

const IMAGES_CLASS = 'main-project-card-images';

const IMAGES_OBJECT = {
  javascript: <JavascriptLogo className={ style[IMAGES_CLASS] } />,
  flutter: <FlutterLogo className={ style[IMAGES_CLASS] } />,
  react: <ReactLogo className={ style[IMAGES_CLASS] } />,
};

export default function MainProjectsCard({ text = '', language }) {
  return (
    <div
      className={ style['main-project-card'] }
    >
      <div className={ style['main-project-container-frame'] } />
      <div className={ style['main-project-text-container'] } />
      <span className={ style['main-project-text'] }>{text}</span>
      {
        IMAGES_OBJECT[language]
      }
    </div>
  );
}

MainProjectsCard.propTypes = {
  text: PropTypes.string,
  language: PropTypes.string.isRequired,
};
