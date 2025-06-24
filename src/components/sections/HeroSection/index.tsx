'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section id="main" className="main p-block" style={{ backgroundImage: 'url(/bg-main.jpg)' }}>
      <Link href="/" className="main-logo">
        <Image src="/logo.png" alt="Logotype" width={146} height={219} unoptimized />
      </Link>
      <div className="wrap">
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
