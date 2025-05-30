import './footer.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../public/logoNavbar.png'
import {FacebookOutlined,InstagramOutlined,TwitterSquareFilled,GlobalOutlined} from '@ant-design/icons'
export default function footer() {
    return (
        <footer>
            <div className="container-footer">
                <div className="about-us-footer">
                    <h1>About Us</h1>
                    <ul className='about-list'>
                        <li><Link href={'/about'}>Company Profile</Link></li>
                        
                        <div className="icon-contact">
                            <ul className='icon-flex'>
                                <li>
                                    <Link href={'/'}><FacebookOutlined /></Link>
                                </li>
                                <li>
                                    <Link href={'/'}><InstagramOutlined /></Link>
                                </li>
                                <li>
                                    <Link href={'/'}><TwitterSquareFilled /></Link>
                                </li>
                                <li>
                                    <Link href={'/'}><GlobalOutlined /></Link>
                                </li>
                            </ul>
                        </div>
                    </ul>
                    
                </div>

                <div className="menu-footer">
                    <h1>Menu</h1>
                    <ul className='menu-list-footer'>
                        <li><Link href={'/'}>HOME</Link></li>
                        <li><Link href={'/about'}>COMPANY PROFILE</Link></li>
                        <li><Link href={'/technologies'}>TECHNOLOGIES</Link></li>
                        <li><Link href={'/product'}>PRODUCT</Link></li>
                        <li><Link href={'/network'}>NETWORK</Link></li>
                        <li><Link href={'/contact'}>CONTACT</Link></li>
                    </ul>
                </div>
                <div className="us-contact">
                    <ul className='utility-footer'>
                        <li><Link href={''}>HOME</Link></li>
                        <li><Link href={''}>ABOUT</Link></li>
                        <li><Link href={''}>TECHNOLOGIES</Link></li>
                        <li><Link href={''}>PRODUCT</Link></li>
                        <li><Link href={''}>NETWORK</Link></li>
                        <li><Link href={''}>CONTACT</Link></li>
                    </ul>

                </div>

                <div className="google-map">
                   <Image src={Logo} className='logo-footer' priority alt='JIEI(THAILAND).CO.,LTD' />
                </div>
            </div>
            <div className="not-copy-page">
                 <p>Copyright © 2025 JIEI(THAILAND).CO.,LTD. สงวนสิทธิ์ทุกประการ</p>
            </div>
        </footer>
    )
}
