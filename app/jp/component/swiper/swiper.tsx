'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

import banner1 from '../../../../public/banner1.png';
import banner2 from '../../../../public/banner2.png';
import banner3 from '../../../../public/banner3.png';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={banner1} priority alt="jiei(thailand).co.,ltd" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} priority alt="jiei(thailand).co.,ltd" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} priority alt="jiei(thailand).co.,ltd" />
        </SwiperSlide>

        {/* Removed `slot="container-end"` */}
        <div className="autoplay-progress">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20" />
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
