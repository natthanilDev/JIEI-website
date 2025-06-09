'use client'
import './contact.css'
import Link from 'next/link'
// import Image from 'next/image'
import { backend } from './backend'
// import Logo from '../../../../public/logoNavbar.png'
// import ButtonVM from './buttonVM'
import ButtonViewMap from './buttonViewMap'
export default function Contact() {
    const headleSubmit = async (e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined }) => {
        e.preventDefault()
        const dataForm = new FormData(e.currentTarget)
        const data = await backend(dataForm)


        return data;
    }
    return (
        <div className="bc">

            <div className="Contact-form">
                <h1>Contact Form</h1>
            </div>
            <div className="form-box">
                <form onSubmit={headleSubmit}>
                    <div className="all">
                        <div className="box-image">
                            <div className="contact-staff">
                                <div className="card-staff">

                                    <Link target='_blank' href={'mailto://compose?to=jiei-sales@jieithai.com&subject=หัวเรื่อง&body=ข้อความ'}>
                                        <div className="text-contact">
                                            <p>jiei-sales@jieithai.com</p>
                                            <p className='section-contact'>Sales Department</p>
                                        </div>
                                    </Link>
                                    <Link target='_blank' href={'mailto://compose?to=jiei-pur@jieithai.com&subject=หัวเรื่อง&body=ข้อความ'}>

                                        <div className="text-contact">
                                            <p>jiei-pur@jieithai.com</p>
                                            <p className='section-contact'>Purchasing Department</p>
                                        </div>
                                    </Link>
                                    <Link target='_blank' href={'mailto://compose?to=jiei-hr@jieithai.com&subject=หัวเรื่อง&body=ข้อความ'}>

                                        <div className="text-contact">
                                            <p>jiei-hr@jieithai.com</p>
                                            <p className='section-contact'>Human and Rource Department</p>

                                        </div>
                                    </Link>

                                    <Link target='_blank'  href={'mailto://compose?to=jiei-safety@jieithai.com&subject=หัวเรื่อง&body=ข้อความ'}>
                                        <div className="text-contact">
                                            <p>jiei-safety@jieithai.com</p>
                                            <p className='section-contact'>Safety and Environment Department</p>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                        </div>

                        <div className="all-contact">
                            <div className="input-box">
                                <label htmlFor="youname">Your name </label>
                                <input className="input-contact" type="text" name="name" id="youname" placeholder="ชื่อ-สกุล" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="email">Email </label>
                                <input className="input-contact" type="email" name="email" id="email" placeholder="อีเมลล์ของคุณ" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="address">Address </label>
                                <input className="input-contact" type="text" name="address" id="address" placeholder="ที่อยู่" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="phone">Phone</label>
                                <input className="input-contact" type="tel" name="phone" id="phone" placeholder="เบอร์โทร" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="subject">Subject </label>
                                <input className="input-contact" type="text" name="subject" id="subject" placeholder="เรื่อง" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="message">Message </label>
                                <textarea name="message" className='textarea' id="message" placeholder="ข้อความ" required></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="submit-box">
                        <input className="submit" type="submit" value="Send" />
                    </div>

                </form>
            </div>


            <div className="google-map-1">
                <Link href={'tel:033136581-4'} className='atellandaddress'>
                    <div className="box-image">
                        <div className="contact-buttom">
                            <li className='topic-address-contact'>Phone</li>
                            <li> 033136581-4</li>

                        </div>
                    </div>
                </Link>

                <Link target='_blank' className='atellandaddress' href={'https://maps.app.goo.gl/cE3RtxecAna7pTtx9'} >
                    <div className="contact-buttom">
                        <li   className='topic-address-contact'>Address</li>
                        <li> Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6, T.Bueng, A.Sriracha, Chonburi 20230 Thailand </li>
                    </div>
                </Link>
             
            </div>
        <ButtonViewMap />
        </div>
    )
}
