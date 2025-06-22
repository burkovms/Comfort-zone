'use client';
import { useState } from 'react';
import { programCategories } from '@/data/programs';
import { ProgramItem } from '@/components/sections/ProgramItem';

import './ProgramListItem.scss';
const ProgramListItem = () => {
  const [isOpented, setIsOpened] = useState<Record<number, boolean>>({});

  const toggleIsOpened = (id: number) => {
    setIsOpened(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getProgramWord = (count: number) => {
    if (count === 1) return 'програма';
    if (count >= 2 && count <= 4) return 'програми';
    return 'програм';
  };
  return (
    <>
      {programCategories.map(category => (
        <div
          key={category.id}
          className={`item-category ${isOpented[category.id] ? 'opened' : ''}`}
        >
          <div className="item-category__name">
            <h3 onClick={() => toggleIsOpened(category.id)} className="h3 title">
              {category.title}
            </h3>
            <p className="text-sm">
              <span>{category.programs.length}</span> {getProgramWord(category.programs.length)}
            </p>
          </div>
          {isOpented[category.id] && (
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
          )}
        </div>
      ))}
    </>
  );
};

export default ProgramListItem;
