'use client';
import { tariffs } from '@/data/tariffs';
import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import './ClubCards.scss';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export const ClubCards = () => {
  const newTariff = tariffs.filter(item => item.homeVisible);
  const [isActive, setIsActive] = useState<number>(0);
  const handleActive = (index: number) => {
    setIsActive(index);
  };

  return (
    <section className="club-cards min-h p-block">
      <div className="club-cards__left">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          Клубні картки
        </motion.h2>
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
        <AnimatePresence mode="wait">
          {newTariff.map((tariff, index) =>
            isActive === index ? (
              <motion.div
                layout
                key={tariff.slug}
                className="club-cards__item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="club-cards__item-content"
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: 40 },
                    }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                  >
                    <div className="club-cards__item-imgs">
                      <Image
                        className="img"
                        src={tariff.img}
                        alt={tariff.name}
                        width={663}
                        height={503}
                      />
                      <Image
                        className="img"
                        src={tariff.img}
                        alt={tariff.name}
                        width={663}
                        height={503}
                      />
                    </div>
                  </motion.div>
                  <div className="club-cards__info">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: 40 },
                        visible: { opacity: 1, x: 0 },
                        exit: { opacity: 0, x: 40 },
                      }}
                      transition={{ delay: 0.2, duration: 0.2 }}
                    >
                      <div className="title text-lg">Абонемент</div>
                      <h4 className="name">«{tariff.name}»</h4>
                      <p className="text">{tariff.excerpt}</p>
                      <span className="visits">
                        {tariff.visit} {tariff.visit < 5 ? 'відвідуваня' : 'відвідувань'}
                      </span>
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: 40 },
                        visible: { opacity: 1, x: 0 },
                        exit: { opacity: 0, x: 40 },
                      }}
                      transition={{ delay: 0.3, duration: 0.2 }}
                    >
                      <Button href={`/tariffs/${tariff.slug}`} color="black">
                        Дізнатись подробиці
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>
      </div>
      <Link href="/tariffs" className="btn-gold mobile-visible">
        <span>Показати все</span>
      </Link>
    </section>
  );
};

export default ClubCards;
