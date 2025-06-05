'use client'
import '../../../en/component/contact/contact.css'
import Link from 'next/link'
// import Image from 'next/image'
import { backend } from './backend'
// import Logo from '../../../../public/logoNavbar.png'
import ButtonVM from './buttonVM'

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
                <h1>フォーム・お問い合わせフォーム</h1>
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
                                            <p className='section-contact'>営業部</p>
                                        </div>
                                    </Link>
                                    <Link target='_blank' href={'mailto://compose?to=jiei-pur@jieithai.com&subject=หัวเรื่อง&body=ข้อความ'}>

                                        <div className="text-contact">
                                            <p>jiei-pur@jieithai.com</p>
                                            <p className='section-contact'>	購買部t</p>
                                        </div>
                                    </Link>
                                    <Link target='_blank' href={'mailto://compose?to=jiei-hr@jieithai.com&subject=หัวเรื่อง&body=ข้อความ'}>

                                        <div className="text-contact">
                                            <p>jiei-hr@jieithai.com</p>
                                            <p className='section-contact'>人事部（または 人事・総務部）</p>

                                        </div>
                                    </Link>

                                    <Link target='_blank'  href={'mailto://compose?to=jiei-safety@jieithai.com&subject=หัวเรื่อง&body=ข้อความ'}>
                                        <div className="text-contact">
                                            <p>jiei-safety@jieithai.com</p>
                                            <p className='section-contact'>安全環境部（または 安全・環境管理部）</p>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                        </div>

                        <div className="all-contact">
                            <div className="input-box">
                                <label htmlFor="youname">お名前（必須） </label>
                                <input className="input-contact" type="text" name="name" id="youname" placeholder="お名前（氏名）" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="email">メールアドレス（必須） </label>
                                <input className="input-contact" type="email" name="email" id="email" placeholder="メールアドレス" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="address">Address </label>
                                <input className="input-contact" type="text" name="address" id="address" placeholder="ご住所" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="phone">電話番号（必須）</label>
                                <input className="input-contact" type="tel" name="phone" id="phone" placeholder="お電話番号" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="subject">件名（必須） </label>
                                <input className="input-contact" type="text" name="subject" id="subject" placeholder="件名" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="message">お問い合わせ内容（必須） </label>
                                <textarea name="message" className='textarea' id="message" placeholder="メッセージ / お問い合わせ内容" required></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="submit-box">
                        <input className="submit" type="submit" value="送信ボタン" />
                    </div>

                </form>
            </div>


            <div className="google-map-1">
                <Link href={'tel:033136581-4'} className='atellandaddress'>
                    <div className="box-image">
                        <div className="contact-buttom">
                            <li className='topic-address-contact'>電話番号</li>
                            <li> 033136581-4</li>

                        </div>
                    </div>
                </Link>

                <Link target='_blank' className='atellandaddress' href={'https://maps.app.goo.gl/cE3RtxecAna7pTtx9'} >
                    <div className="contact-buttom">
                        <li   className='topic-address-contact'>住所</li>
                        <li> タイ王国 〒20230 チョンブリー県シラチャー郡ブン町ムー6、180/3、ピントン4工業団地 G18ユニット </li>
                    </div>
                </Link>
             
            </div>
        <ButtonVM />
        </div>
    )
}
