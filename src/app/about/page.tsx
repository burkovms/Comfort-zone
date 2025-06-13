import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const About = () => {
  return <h1 className="p-block">About</h1>;
};

export default About;
