import React from 'react';
import JavascriptLogo from './icons/JavascriptLogo';
import FlutterLogo from './icons/FlutterLogo';
import ReactLogo from './icons/ReactLogo';
import JestLogo from './icons/JestLogo';
import TrelloLogo from './icons/TrelloLogo';
import GitLogo from './icons/GitLogo';
import CSS3Logo from './icons/CSS3Logo';
import FirebaseLogo from './icons/FirebaseLogo';
import style from './styles/OrbitateImages.module.css';

const ICON_ORBIT_CSS = 'orbitate-icon';

export default function OrbitateImages() {
  return (
    <div className={ style.orbitate }>
      <JavascriptLogo className={ style[ICON_ORBIT_CSS] } />
      <FlutterLogo className={ style[ICON_ORBIT_CSS] } />
      <ReactLogo className={ style[ICON_ORBIT_CSS] } />
      <JestLogo className={ style[ICON_ORBIT_CSS] } />
      <TrelloLogo className={ style[ICON_ORBIT_CSS] } />
      <GitLogo className={ style[ICON_ORBIT_CSS] } />
      <CSS3Logo className={ style[ICON_ORBIT_CSS] } />
      <FirebaseLogo className={ style[ICON_ORBIT_CSS] } />
    </div>
  );
}
