'use client';
// import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import SwiperCore from 'swiper';
import Link from 'next/link';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Trainer.scss';

const slidesTrainer = [
  {
    img: '/trener-photo-1.png',
    name: 'Александр Бауров',
    text: `<p>За счет опыта в разработке программ по снятию стресса, напряжения и усталости.</p><p>В основу, которых легли интенсивные, медитирующие и релаксирующие практики решающие проблемы уже в течении 30 минут.</p>`,
  },
  {
    img: '/trener-photo-2.png',
    name: 'Галина Белякова',
    text: `<p>За счет опыта в разработке программ по снятию стресса, напряжения и усталости.</p><p>В основу, которых легли интенсивные, медитирующие и релаксирующие практики решающие проблемы уже в течении 30 минут.</p>`,
  },
  {
    img: '/trener-photo-3.png',
    name: 'Тофик Сулийманов',
    text: `<p>За счет опыта в разработке программ по снятию стресса, напряжения и усталости.</p><p>В основу, которых легли интенсивные, медитирующие и релаксирующие практики решающие проблемы уже в течении 30 минут.</p>`,
  },
];

export const Trainer = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [totalSlides, setTotalSlides] = useState(slidesTrainer.length);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setTotalSlides(slidesTrainer.length);
  }, []);

  return (
    <section className="partners">
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          renderBullet: (index, className) =>
            `<li class="${className}"><button>${index + 1}</button></li>`,
        }}
        navigation={{
          nextEl: '.arrow-next',
          prevEl: '.arrow-prev',
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={swiper => setActiveSlide(swiper.realIndex)}
        grabCursor={true}
        loop
        className="partners-slider-for"
      >
        {slidesTrainer.map((slide, index) => (
          <SwiperSlide key={index} className="partners-slide-for">
            <div
              className="partner-slide-bg"
              style={{ backgroundImage: 'url(/partner-slide-bg.jpg)' }}
            />
            <div className="partners-slide-item">
              <img className="partners-slide-img" src={slide.img} alt={slide.name} />
              <div className="partners-slide-info-cover">
                <div className="partners-slide-info">
                  <div className="title">Меня зовут</div>
                  <div className="name h4">{slide.name}</div>
                  <div className="text-wrap" dangerouslySetInnerHTML={{ __html: slide.text }}></div>
                  <Link href="/schedule" className="btn btn-black">
                    <span>Записаться на занятие</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="partner-navigation slider-navigation">
          <span className="arrow-prev arrow">
            <Image src="/arrow-left.png" alt="Arrow previous" width={59} height={10} />
          </span>
          <ul className="slick-dots">
            <li className="slick-active">0{activeSlide + 1}</li>
            <li className="qty">0{totalSlides}</li>
          </ul>
          <span className="arrow-next arrow">
            <Image src="/arrow-right.png" alt="Arrow next" width={59} height={10} />
          </span>
        </div>
      </Swiper>
    </section>
  );
};

export default Trainer;
