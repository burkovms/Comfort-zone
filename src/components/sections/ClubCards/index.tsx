'use client';
import { tariffs } from '@/data/tariffs';
import Link from 'next/link';
import Image from 'next/image';
import './ClubCards.scss';
import { useState } from 'react';

export const ClubCards = () => {
  const newTariff = tariffs.filter(item => item.homeVisible);
  const [isActive, setIsActive] = useState<number>(0);
  const handleActive = (index: number) => {
    setIsActive(index);
  };

  return (
    <section className="club-cards min-h p-block">
      <div className="club-cards__left">
        <h2>Клубні картки</h2>
        <ul className="navigation">
          {newTariff.map((tariff, index) => (
            <li
              key={index}
              className={`item ${isActive === index ? 'active' : ''}`}
              onClick={() => handleActive(index)}
            >
              <span className="text-lg">«{tariff.name}»</span>
            </li>
          ))}
        </ul>
        <Link href="/tariffs" className="btn-gold">
          <span>Показати все</span>
        </Link>
      </div>
      <div className="club-cards__right">
        {newTariff.map((tariff, index) => (
          <div key={index} className={`club-cards__item ${isActive === index ? 'active' : ''}`}>
            <ul className="navigation">
              {newTariff.map((tariff, index) => (
                <li
                  key={index}
                  className={`item ${isActive === index ? 'active' : ''}`}
                  onClick={() => handleActive(index)}
                >
                  <span className="text-lg">«{tariff.name}»</span>
                </li>
              ))}
            </ul>
            {isActive === index && (
              <div className="club-cards__item-content">
                <Image
                  className="img"
                  src="/cert-1.png"
                  alt={tariff.name}
                  width={663}
                  height={503}
                />
                <div className="club-cards__info">
                  <div className="title text-lg">Абонемент</div>
                  <h4 className="name">«{tariff.name}»</h4>
                  <p className="text">{tariff.excerpt}</p>
                  <span className="visits">
                    {tariff.visit} {tariff.visit < 5 ? 'відвідуваня' : 'відвідувань'}
                  </span>
                  <Link href={`/tariffs/${tariff.slug}`} className="btn btn-black">
                    <svg className="border">
                      <rect pathLength="1"></rect>
                    </svg>
                    <span>Дізнатись подробиці</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <Link href="/tariffs" className="btn-gold mobile-visible">
        <span>Показати все</span>
      </Link>
    </section>
  );
};

export default ClubCards;
