'use client'
import './contact.css'
import Image from 'next/image'
import { backend } from './backend'
import Logo from '../../../../public/logoNavbar.png'


export default function Contact() {

    const headleSubmit = async (e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined }) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        try {
            await backend(formData)

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="bc">
            <div className="Contact-form">
                <h1>お問い合わせフォーム</h1>
            </div>
            <div className="form-box">
                <form onSubmit={headleSubmit}>
                    <div className="all">
                        <div className="box-image">
                            <div className="contact-staff">
                                <div className="card-staff">
                                    <div className="text-contact">
                                        <p>jiei-sales@jieithai.com</p>
                                        <p className='section-contact'>営業部（えいぎょうぶ）</p>
                                    </div>
                                    <div className="text-contact">
                                        <p>jiei-pur@jieithai.com</p>
                                        <p className='section-contact'>日本語: 購買部（こうばいぶ）</p>
                                    </div>

                                    <div className="text-contact">
                                        <p>jiei-hr@jieithai.com</p>
                                        <p className='section-contact'>日本語: 人事部（じんじぶ）</p>

                                    </div>


                                    <div className="text-contact">
                                        <p>jiei-safety@jieithai.com</p>
                                        <p className='section-contact'>日本語: 安全環境部（あんぜんかんきょうぶ）</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="all-contact">
                            <div className="input-box">
                                <label htmlFor="youname">あなたの名前 </label>
                                <input className="input-contact" type="text" name="name" id="youname" placeholder="ชื่อ"  required/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="email">	メールアドレス </label>
                                <input className="input-contact" type="email" name="email" id="email" placeholder="อีเมลล์"  required/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="address">住所（じゅうしょ） </label>
                                <input className="input-contact" type="text" name="address" id="address" placeholder="ที่อยู่"  required/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="phone">	電話番号（でんわばんごう）</label>
                                <input className="input-contact" type="tel" name="phone" id="phone" placeholder="เบอร์โทร"  required/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="subject">	件名（けんめい） </label>
                                <input className="input-contact" type="text" name="subject" id="subject" placeholder="เรื่อง"  required/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="message">	メッセージ </label>
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
                <div className="box-image">
                    <Image src={Logo} alt='JIEI(THAILAND).CO.,LTD' />
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1518657434735!2d101.03399597454839!3d13.089560112282221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c7dc30976c73%3A0x4d5814b37d43e107!2sJIEI(Thailand)%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1748509058790!5m2!1sth!2sth" loading="lazy"></iframe>
            </div>

        </div>
    )
}
