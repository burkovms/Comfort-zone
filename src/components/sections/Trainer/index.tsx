'use client';
import { slidesTrainer } from './data';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Trainer.scss';
import { Button } from '@/components/ui/Button';

export const Trainer = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [totalSlides, setTotalSlides] = useState(slidesTrainer.length);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setTotalSlides(slidesTrainer.length);
  }, []);

  return (
    <section className="trainers">
      <div className="trainers__slide-bg">
        <Image
          src="/partner-slide-bg.jpg"
          alt="background"
          width={1920}
          height={549}
          quality={90}
        />
      </div>
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
        speed={800}
        loop
        className="trainers__slider"
      >
        {slidesTrainer.map((slide, index) => (
          <SwiperSlide key={index} className="trainers__slide">
            <div className="trainers__slide-item p-block min-h">
              <Image
                className="trainers__slide-img"
                src={slide.img.src}
                alt={slide.name}
                width={slide.img.width}
                height={slide.img.height}
                quality={90}
              />
              <div className="trainers__slide-info-cover">
                <div className="trainers__slide-info">
                  <div className="title text-lg">Мене звуть</div>
                  <div className="name h4">{slide.name}</div>
                  <div className="text-wrap" dangerouslySetInnerHTML={{ __html: slide.text }}></div>

                  <Button href="#" color="black">
                    Записатися на заняття
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="trainers__navigation slider-navigation">
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
