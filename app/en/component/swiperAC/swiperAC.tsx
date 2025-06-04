'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Img from '../../../../public/banner1.png'
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './activities.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
    const alt = "๋JIEI(THAILAND).CO.,LTD"


    return (
        <div>
            <div className="swiper-box-AC">
                <div className="text-box-activities">
                    <h1>Activities</h1>
                </div>

                <div className="card-swiper">
                    <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination]} className="mySwiper" >
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>
                        <SwiperSlide><Image src={Img} alt={alt} /></SwiperSlide>

                    </Swiper>
                </div>
                <div className="Activities-list">
                    <div className="Activities-box">
                        <h1>Activities List</h1>
                    </div>

                    <div className="ac-list">
                        <ul className='ul-ac-list'>
                            <li>Activities </li>
                            <li>Activities</li>
                            <li>Activities</li>
                            <li>Activities</li>
                            <li>ActivitiesActivitiesActivities</li>
                            <li>Activities</li>
                            <li>Activities</li>
                            <li>Activities</li>
                            <li>Activities</li>
                            <li>Activities</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="card-ac">
                <div className="card-box">
                    <div className="card-image">
                        <Image className='image-card-ac' src={Img} alt={alt} />
                    </div>
                    <div className="text-box-Ac">
                        <p>Activities</p>
                    </div>
                </div>

                <div className="card-box">
                    <div className="card-image">
                        <Image className='image-card-ac' src={Img} alt={alt} />
                    </div>
                    <div className="text-box-Ac">
                        <p>Activities</p>
                    </div>
                </div>

                <div className="card-box">
                    <div className="card-image">
                        <Image className='image-card-ac' src={Img} alt={alt} />
                    </div>
                    <div className="box-text-container">
                        <div className="text-box-Ac1">
                            <p className='text-discription-ac1'>Activities</p>
                        </div>
                        <div className="text-box-Ac2">
                            <p className='text-discription-ac2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores tempore, provident unde error nam! Harum quisquam consequatur provident, laborum sapiente magnam exercitationem, voluptates non veritatis quod assumenda est commodi.</p>
                        </div>
                        <div className="noneBox">

                        </div>
                    </div>

                </div>

                <div className="card-box">
                    <div className="card-image">
                        <Image className='image-card-ac' src={Img} alt={alt} />
                    </div>
                    <div className="text-box-Ac">
                        <p>Activities</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
