import type { Metadata } from 'next';
import ProgramListItem from '@/components/sections/ProgramListItem';
import './Programs.scss';

export const metadata: Metadata = {
  title: 'Programs',
};

const Programs = () => {
  return (
    <section className="page-container p-block programs">
      <ProgramListItem />
    </section>
  );
};

export default Programs;
