'use client';
import Image from 'next/image';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Thumbs } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import './AboutStudio.scss';

const slides = [
  {
    img: '/photo_studia.jpg',
    avatar: '/photo-about-1.png',
    name: 'Девід Стейтем',
    profile: 'Актор',
    text: 'Медитація — дуже важливе заняття в житті. Якщо ви ще не замислювалися про це, ви даремно витрачаєте час!',
  },
  {
    img: '/bg-bottom.jpg',
    avatar: '/photo-about-2.png',
    name: 'Він Дізель',
    profile: 'Актор',
    text: 'Медитація — дуже важливе заняття в житті. Якщо ви ще не замислювалися про це, ви даремно витрачаєте час!',
  },
  {
    img: '/photo_studia.jpg',
    avatar: '/photo-about-1.png',
    name: 'Девід Стейтем',
    profile: 'Актор',
    text: 'Медитація — дуже важливе заняття в житті. Якщо ви ще не замислювалися про це, ви даремно витрачаєте час!',
  },
  {
    img: '/bg-bottom.jpg',
    avatar: '/photo-about-2.png',
    name: 'Він Дізель',
    profile: 'Актор',
    text: 'Медитація — дуже важливе заняття в житті. Якщо ви ще не замислювалися про це, ви даремно витрачаєте час!',
  },
  {
    img: '/photo_studia.jpg',
    avatar: '/photo-about-1.png',
    name: 'Девід Стейтем',
    profile: 'Актор',
    text: 'Медитація — дуже важливе заняття в житті. Якщо ви ще не замислювалися про це, ви даремно витрачаєте час!',
  },
  {
    img: '/bg-bottom.jpg',
    avatar: '/photo-about-2.png',
    name: 'Він Дізель',
    profile: 'Актор',
    text: 'Медитація — дуже важливе заняття в житті. Якщо ви ще не замислювалися про це, ви даремно витрачаєте час!',
  },
  {
    img: '/photo_studia.jpg',
    avatar: '/photo-about-1.png',
    name: 'Девід Стейтем',
    profile: 'Актор',
    text: 'Медитація — дуже важливе заняття в житті. Якщо ви ще не замислювалися про це, ви даремно витрачаєте час!',
  },
  {
    img: '/bg-bottom.jpg',
    avatar: '/photo-about-2.png',
    name: 'Він Дізель',
    profile: 'Актор',
    text: 'Медитація — дуже важливе заняття в житті. Якщо ви ще не замислювалися про це, ви даремно витрачаєте час!',
  },
];

const AboutStudio = () => {
  const [thumbsSwiperInstance, setThumbsSwiperInstance] = useState<SwiperCore | null>(null);
  const [totalSlidesCount, setTotalSlidesCount] = useState(slides.length);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    setTotalSlidesCount(slides.length);
  }, []);

  return (
    <section className="about-studio">
      <Swiper
        modules={[Navigation, Pagination, Thumbs, EffectFade]}
        thumbs={{ swiper: thumbsSwiperInstance }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={swiper => setActiveSlideIndex(swiper.realIndex)}
        onSwiper={swiper => (swiperRef.current = swiper)}
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
        grabCursor={true}
        speed={800}
        loop
        className="about-studio__slider-for "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="about-studio__slide-for p-block min-h">
            {/* <span
              className="about-studio__slide-bg"
              style={{ backgroundImage: `url(${slide.img})` }}
            /> */}
            <div className="about-studio__slide-bg">
              <Image src={slide.img} alt="background" fill />
            </div>
            <Image
              src={slide.avatar}
              alt="Avatar"
              className="about-studio__photo"
              width={154}
              height={154}
            />
            <div className="about-studio__info">
              <div className="name text-sm">{slide.name}</div>
              <div className="prof text-sm">{slide.profile}</div>
              <p>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="about-studio__bottom p-block">
        <div className="about-studio__navigation">
          <span className="arrow-prev arrow">
            <Image src="/about-arrow-left.png" alt="Arrow Previous" width={21} height={10} />
          </span>
          <ul className="slick-dots">
            <li className="slick-active">0{activeSlideIndex + 1}</li>
            <li className="qty">0{totalSlidesCount}</li>
          </ul>
          <span className="arrow-next arrow">
            <Image src="/about-arrow-right.png" alt="Arrow next" width={21} height={10} />
          </span>
        </div>

        <Swiper
          onSwiper={setThumbsSwiperInstance}
          spaceBetween={0}
          slidesPerView={5}
          watchSlidesProgress
          speed={800}
          loop
          className="about-studio__slider-nav"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="about-studio__slide-nav">
              <Image src={slide.img} alt="Navigation Photo" width={47} height={47} unoptimized />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutStudio;
