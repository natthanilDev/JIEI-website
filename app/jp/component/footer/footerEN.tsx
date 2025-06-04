import './footer.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../public/logoNavbar.png'
import { PhoneFilled ,HomeFilled ,BookFilled} from '@ant-design/icons'
export default function footer() {
    return (
        <footer>
            <div className="container-footer">
                <div className="logo-footer-box">
                    <Image src={Logo} className='logo-footer' priority alt='JIEI(THAILAND).CO.,LTD' />
                </div>
                <div className="about-us-footer">
                    <h1>Contact</h1>
                    <ul className='about-list'>
                        <li><Link href={'tel:033136581-4'}><span><PhoneFilled /></span> 033136581-4</Link></li>
                        <li><Link target='_blank' href={'https://maps.app.goo.gl/cE3RtxecAna7pTtx9'} ><span><HomeFilled /></span> Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6, T.Bueng, A.Sriracha, Chonburi 20230 Thailand </Link></li>
                        <li><Link  href={'/'} ><span><BookFilled /></span> TIN : 0215554005118 </Link></li>
                    </ul>
                </div>

                <div className="google-map">
                    <iframe className='google-map-copany' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1518657434735!2d101.03399597454839!3d13.089560112282221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c7dc30976c73%3A0x4d5814b37d43e107!2sJIEI(Thailand)%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1748509058790!5m2!1sth!2sth" loading="lazy"></iframe>
                </div>
            </div>
            <div className="not-copy-page">
                <p>Copyright © 2025 JIEI(THAILAND).CO.,LTD. สงวนสิทธิ์ทุกประการ</p>
            </div>
        </footer>
    )
}
