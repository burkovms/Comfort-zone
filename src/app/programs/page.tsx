import type { Metadata } from 'next';
import { programCategories } from '@/data/programs';
import { ProgramItem } from '@/components/sections/ProgramItem';
import './Programs.scss';

export const metadata: Metadata = {
  title: 'Programs',
};

const Programs = () => {
  const getProgramWord = (count: number) => {
    if (count === 1) return 'програма';
    if (count >= 2 && count <= 4) return 'програми';
    return 'програм';
  };
  return (
    <section className="page-container p-block programs">
      {programCategories.map(category => (
        <div key={category.id} className="item-category">
          <div className="item-category__name">
            <h3 className="h3 title">{category.title}</h3>
            <p className="text-sm">
              <span>{category.programs.length}</span> {getProgramWord(category.programs.length)}
            </p>
          </div>
          <div className="item-category__container">
            <img
              className="item-category__container-bg"
              src={category.image}
              alt={category.title}
            />
            {category.programs.map(program => (
              <div key={program.id} className="item-category__item-cover">
                <ProgramItem props={program} />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="programs__wrap"></div>
    </section>
  );
};

export default Programs;
