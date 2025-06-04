import './footer.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../public/logoNavbar.png'
import {FacebookOutlined,InstagramOutlined,TwitterSquareFilled,GlobalOutlined} from '@ant-design/icons'
export default function footerJP() {
    return (
        <footer>
            <div className="container-footer">
                <div className="about-us-footer">
                    <h1>企業情報</h1>
                    <ul className='about-list'>
                        <li><Link href={'/jp/about'}>会社案内</Link></li>
                        
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
                    <h1>メニュー</h1>
                    <ul className='menu-list-footer'>
                        <li><Link href={'/jp'}>ホーム</Link></li>
                        <li><Link href={'/jp/about'}>会社案内</Link></li>
                        <li><Link href={'/jp/technologies'}>開発技術紹介</Link></li>
                        <li><Link href={'/jp/product'}>製品紹介</Link></li>
                        <li><Link href={'/jp/network'}>ネットワーク</Link></li>
                        <li><Link href={'/jp/contact'}>お問い合わせ</Link></li>
                    </ul>
                </div>
              

                <div className="google-map">
                   <Image src={Logo} className='logo-footer' priority alt='JIEI(THAILAND).CO.,LTD' />
                </div>
            </div>
            <div className="not-copy-page">
                 <p>Copyright © 2025 JIEI（THAILAND）CO., LTD. 無断転載を禁じます。</p>
            </div>
        </footer>
    )
}
