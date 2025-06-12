'use client'

import Img from '../../../../public/banner1.png'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import './activities.css';
import SwiperSlides from './swiper';

export default function SwiperAc() {
    const alt = "๋JIEI(THAILAND).CO.,LTD"


    return (
        <div>
            <div className="swiper-box-AC">
                <div className="image-intro-AC">
                    <h1 className="text-box-ac">
                        OUR COMPANY ACTIVITIES
                    </h1>
                    <div className="all-card-Ac">
                        <div className="card-AC-box">
                            <div className="card-ac-intro">
                                <Image src='/f4.jpg' className='intro-image-card' alt={alt} priority width={100} height={200} />
                            </div>
                            <div className="card-content-ac">
                                <div className="mojiandcontact">
                                    <div className="content-ac-card">
                                        <h2 className='title-ac'>ACTIVITIES</h2>
                                        <p className='contactAC'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, exercitationem. Eos, voluptas iure? Dolorum cupiditate, aut optio odio vero eveniet, blanditiis accusantium quibusdam consequuntur sed nisi rem nulla, iste ad.</p>
                                    </div>
                                    <div className="emoji-box">
                                        <Image src={"/emoji1.png"} className='emoji' alt={alt} width={100} height={200} priority />
                                    </div>
                                </div>

                            </div>

                        </div>


                         <div className="card-AC-box">
                            <div className="card-ac-intro">
                                <Image src='/f4.jpg' className='intro-image-card' alt={alt} priority width={100} height={200} />
                            </div>
                            <div className="card-content-ac">
                                <div className="mojiandcontact">
                                    <div className="content-ac-card">
                                        <h2 className='title-ac'>ACTIVITIES</h2>
                                        <p className='contactAC'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, exercitationem. Eos, voluptas iure? Dolorum cupiditate, aut optio odio vero eveniet, blanditiis accusantium quibusdam consequuntur sed nisi rem nulla, iste ad.</p>
                                    </div>
                                    <div className="emoji-box">
                                        <Image src={"/emoji2.png"} className='emoji' alt={alt} width={100} height={200} priority />
                                    </div>
                                </div>

                            </div>

                        </div>

                       <div className="card-AC-box">
                            <div className="card-ac-intro">
                                <Image src='/f4.jpg' className='intro-image-card' alt={alt} priority width={100} height={200} />
                            </div>
                            <div className="card-content-ac">
                                <div className="mojiandcontact">
                                    <div className="content-ac-card">
                                        <h2 className='title-ac'>ACTIVITIES</h2>
                                        <p className='contactAC'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, exercitationem. Eos, voluptas iure? Dolorum cupiditate, aut optio odio vero eveniet, blanditiis accusantium quibusdam consequuntur sed nisi rem nulla, iste ad.</p>
                                    </div>
                                    <div className="emoji-box">
                                        <Image src={"/emoji.png"} className='emoji' alt={alt} width={100} height={200} priority />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>



                </div>
                <div className="text-box-activities">
                    <h1>Activities</h1>
                </div>

                <div className="swiper-ac-image">
                    <div className="contact-ac-swiper">
                        <h1 className='text-intro-image-ac'>Image activities</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, voluptatum facere sint odio ipsum mollitia nobis quasi, incidunt ex laboriosam, cumque error aliquid repellat architecto enim cupiditate distinctio deleniti. Ex?</p>
                    </div>
                    <SwiperSlides />
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


            <div className="container-card-ac">

                <div className="card-box-ac">
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

                <div className="card-box-ac">
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


                <div className="card-box-ac">
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
            </div>







        </div>
    );
}
