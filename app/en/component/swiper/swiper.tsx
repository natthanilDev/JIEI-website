'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper'; // Import SwiperClass for typing
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';
import banner from '../../../../public/introImage4.png';
import banner1 from '../../../../public/introImage3.png';
import banner2 from '../../../../public/introImage2.png';
import banner3 from '../../../../public/introImage1.png';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  // แก้ไขพารามิเตอร์ให้ตรงกับที่ Swiper ต้องการ
  const onAutoplayTimeLeft = (s: SwiperClass, time: number, progress: number) => {
    // s is the Swiper instance, time is timeLeft, progress is percentage
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
        onAutoplayTimeLeft={onAutoplayTimeLeft} // Line 45
        className="mySwiper"
      >
         <SwiperSlide>
          <Image src={banner} priority alt="jiei(thailand).co.,ltd" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner1} priority alt="jiei(thailand).co.,ltd" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} priority alt="jiei(thailand).co.,ltd" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} priority alt="jiei(thailand).co.,ltd" />
        </SwiperSlide>

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