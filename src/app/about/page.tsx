import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const About = () => {
  return (
    <section>
      <div className="container">
        <h1>About</h1>
      </div>
    </section>
  );
};

export default About;
