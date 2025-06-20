'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SwiperSlides() {
    const alt = 'JIEI(THAILAND).CO.,LTD'

    return (
        <>
            <Swiper
              
                loop={true}
                spaceBetween={10}
                navigation={true}
               
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <Image alt={alt} src="/bkac.png" width={100} className='image-swiper-card' height={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt={alt} src="/bkac.png" width={100} className='image-swiper-card' height={200} />

                </SwiperSlide>
                <SwiperSlide>
                    <Image alt={alt} src="/bkac.png" width={100} className='image-swiper-card' height={200} />

                </SwiperSlide>
                <SwiperSlide>
                    <Image alt={alt} src="/bkac.png" width={100} className='image-swiper-card' height={200} />

                </SwiperSlide>
                <SwiperSlide>
                    <Image alt={alt} src="/bkac.png" width={100} className='image-swiper-card' height={200} />

                </SwiperSlide>
                <SwiperSlide>
                    <Image alt={alt} src="/bkac.png" width={100} className='image-swiper-card' height={200} />

                </SwiperSlide>
                <SwiperSlide>
                    <Image alt={alt} src="/bkac.png" width={100} className='image-swiper-card' height={200} />

                </SwiperSlide>
                <SwiperSlide>
                    <Image alt={alt} src="/bkac.png" width={100} className='image-swiper-card' height={200} />

                </SwiperSlide>
                <SwiperSlide>
                    <Image alt={alt} src="/bkac.png" width={100} className='image-swiper-card' height={200} />

                </SwiperSlide>
                <SwiperSlide>
                    <Image alt={alt} src="/bkac.png" width={100} className='image-swiper-card' height={200} />

                </SwiperSlide>
            </Swiper>


        </>
    );
}
