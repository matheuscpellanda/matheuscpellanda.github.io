import React from 'react';
import OrbitateImages from './OrbitateImages';
import style from './styles/PresentationImages.module.css';
import profileImg from '../../assets/images/photos/profileImage2 1.png';

export default function PresentationImages() {
  return (
    <div className={ style['presentation-images'] }>
      <OrbitateImages />
      <div className={ style['hero-image-container'] }>
        <img
          src={ profileImg }
          alt="Profile"
          className={ style['hero-image'] }
        />
        <div className={ style['hero-image-background'] } />
      </div>
      <div className={ style['hero-image-light'] } />
    </div>
  );
}
