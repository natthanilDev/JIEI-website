
import Image from 'next/image'
import Logo from '../../../../public/logoNavbar.png'
import { PhoneFilled, HomeFilled, BookFilled } from '@ant-design/icons'
import Map from '../map/map'
export default function Footer() {





    return (
        <footer>
            <div className="container-footer">
                <div className="logo-footer-box">
                    <Image
                        src={Logo}
                        className="logo-footer"
                        priority
                        alt="JIEI(THAILAND).CO.,LTD"
                        width={150} // ปรับขนาดตามต้องการ
                        height={80}
                    />
                </div>

                <div className="about-us-footer">
                    <h1>Contact</h1>
                    <ul className="about-list">
                        <li>
                            <a href="tel:033136581-4">
                                <PhoneFilled /> 033136581-4
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://maps.app.goo.gl/cE3RtxecAna7pTtx9"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <HomeFilled /> Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6, T.Bueng, A.Sriracha, Chonburi 20230 Thailand
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <BookFilled /> TIN : 0215554005118
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="boxMap">
                    <Map />
                </div>
                
            </div>

            <div className="not-copy-page">
                <p>Copyright © 2025 JIEI(THAILAND).CO.,LTD. สงวนสิทธิ์ทุกประการ</p>
            </div>
        </footer>
    )
}
