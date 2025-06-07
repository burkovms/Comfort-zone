'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Directions.scss';

import Image from 'next/image';
import SwiperCore from 'swiper';

export type Slide = {
  img: string;
  text: string;
};

type SlidesProps = {
  slides: Slide[];
  bg?: 'light' | 'dark';
  title: string;
  slogan: string;
  titleForDescription: string;
};

export default function Directions({
  slides,
  title,
  slogan,
  titleForDescription = 'Что это такое',
  bg = 'light',
}: SlidesProps) {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [totalSlides, setTotalSlides] = useState(slides.length);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setTotalSlides(slides.length);
  }, [slides]);

  return (
    <section className={`directions ${bg === 'light' ? 'light' : 'dark'}`}>
      <div className="directions__wrap">
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
            prevEl: null,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSwiper={swiper => (swiperRef.current = swiper)}
          onSlideChange={swiper => setActiveSlide(swiper.realIndex)}
          grabCursor={true}
          speed={800}
          loop
          className="directions__slider"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i} className="directions__slide">
              <div className="directions__slide-cover">
                <div className="directions__slide-info">
                  <h2 className="title">{title}</h2>
                  <p className="h4 slogan">{slogan}</p>
                  <div className="directions__slide-bottom">
                    <h6>
                      <span>{titleForDescription}</span>
                    </h6>
                    <p className="text text-xl">{slide.text}</p>
                  </div>
                </div>
                <img className="directions__slide-img" src={slide.img} alt={title} />
              </div>
            </SwiperSlide>
          ))}
          <div className="directions__navigation slider-navigation">
            <ul className="slick-dots">
              <li className="slick-active">0{activeSlide + 1}</li>
              <li className="qty">0{totalSlides}</li>
            </ul>
            <span className="arrow-next arrow">
              <Image
                src={`/arrow-right-${bg === 'light' ? 'dark' : 'light'}.png`}
                alt="Arrow next"
                width={59}
                height={10}
              />
            </span>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
