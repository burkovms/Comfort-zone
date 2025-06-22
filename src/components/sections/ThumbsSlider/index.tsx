'use client';
import { useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { VideoBlock } from '@/components/ui/VideoBlock';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './ThumbsSlider.scss';

type Video = {
  posterUrl: string;
  alt: string;
  videoUrl: string;
};

const ThumbSlider = ({ video, slider }: { video: Video; slider: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <div className="thumb-slider">
      <Swiper
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        loop
        className="slider-for"
      >
        <SwiperSlide>
          <VideoBlock posterUrl={video.posterUrl} alt={video.alt} videoUrl={video.videoUrl} />
        </SwiperSlide>
        {slider.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item} alt="Image" width={440} height={244} quality={90} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={4}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        loop
        className="slider-nav"
      >
        <SwiperSlide>
          <Image src={video.posterUrl} alt={video.alt} width={440} height={244} quality={90} />
        </SwiperSlide>

        {slider.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item} alt="Image" width={440} height={244} quality={90} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbSlider;
