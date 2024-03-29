import React from 'react';
import Navbar from '../components/Navbar';
import style from './styles/Home.module.css';
import PresentationText from '../components/Home/PresentationText';
import PresentationImages from '../components/Home/PresentationImages';
import MainProjects from '../components/Home/MainProjects';
import Skills from '../components/Home/Skills';

export default function Home() {
  return (
    <div className={ style['home-page'] }>
      <Navbar />
      <section className={ style['first-section'] }>
        <PresentationText />
        <PresentationImages />
      </section>
      <section className={ style['second-section'] }>
        <MainProjects />
      </section>
      <section className={ style['third-section'] }>
        <Skills />
      </section>
    </div>
  );
}
