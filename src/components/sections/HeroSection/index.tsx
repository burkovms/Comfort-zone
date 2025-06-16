'use client';
import React from 'react';
import './HeroSection.scss';
import { motion } from 'motion/react';

const HeroSection = () => {
  return (
    <section id="main" className="main " style={{ backgroundImage: 'url(/bg-main.jpg)' }}>
      <div className="wrap p-block">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="h4"
        >
          Позбудься стресу та втоми
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="h1"
        >
          за 30 хвилин
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
