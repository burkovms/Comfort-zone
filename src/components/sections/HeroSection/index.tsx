import React from 'react';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section id="main" className="main" style={{ backgroundImage: 'url(/bg-main.jpg)' }}>
      <div className="wrap">
        <h1 className="h4">Избавься от стресса и усталости</h1>
        <p className="h1">за 30 минут</p>
      </div>
    </section>
  );
};

export default HeroSection;
