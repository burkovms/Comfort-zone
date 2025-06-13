import React from 'react';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section id="main" className="main p-block" style={{ backgroundImage: 'url(/bg-main.jpg)' }}>
      <div className="wrap">
        <h1 className="h4">Позбудься стресу та втоми</h1>
        <p className="h1">за 30 хвилин</p>
      </div>
    </section>
  );
};

export default HeroSection;
