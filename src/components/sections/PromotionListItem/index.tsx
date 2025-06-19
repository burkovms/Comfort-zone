'use client';
import Button from '@/components/ui/Button';
import { useRef, useState } from 'react';
import { promotions } from '@/data/promotions';
import './PromotionListItem.scss';

export const PromotionListItem = () => {
  const [activeSlide, setActiveSlide] = useState<string | null>(null);
  const refs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const openSlide = (id: string) => {
    setActiveSlide(id);
    setTimeout(() => {
      refs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const closeSlide = () => {
    setTimeout(() => {
      setActiveSlide(null);
    }, 300);
  };

  return (
    <div className="promotions__container">
      <div className="promotions__row">
        {promotions.map(item => (
          <div key={item.id} className={`promotion__col ${item.size === 'lg' && 'lg'}`}>
            <div
              className={`promotion-item promotion__item ${item.color === 'light' ? 'light' : 'dark'}`}
            >
              <img src={item.img} alt={item.title} />
              <div className="info">
                <div className="cover">
                  <h6 className="h5 title">{item.title}</h6>
                  <p className="text-lg">{item.description}</p>
                </div>
                <div className="btn-wrap">
                  <Button
                    onClick={() => openSlide(item.id)}
                    color={item.color === 'light' ? 'black' : 'white'}
                    type="button"
                    size="sm"
                  >
                    Докладніше
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="promotion-detail">
        {promotions.map(item =>
          activeSlide === item.id ? (
            <div
              key={item.id}
              id={item.id}
              ref={el => {
                refs.current[item.id] = el;
              }}
              className={`promotion-item promotion-detail__item ${item.color === 'light' ? 'light' : 'dark'}`}
            >
              <img src={item.img} alt={item.title} />
              <div className="info">
                <div className="cover">
                  <h6 className="h2 title">{item.title}</h6>
                  <div className="slogan h4">{item.description}</div>
                  <p className="text text-xl">
                    Активація абонементу відбувається в день першого заняття або через тиждень з
                    дати продажу абонементу.
                  </p>
                  <span className="period text-xl">1 місяць = 30 календарних днів</span>
                </div>
                <div className="btn-wrap">
                  <Button
                    onClick={closeSlide}
                    href="#promotions"
                    color={item.color === 'light' ? 'black' : 'white'}
                    size="sm"
                  >
                    Закрити
                  </Button>
                </div>
              </div>
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
};
