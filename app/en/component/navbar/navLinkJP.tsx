'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import './navbar.css'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
export default function NavlinkJP() {
    const [menu, setMenu] = useState(false)
    const pathname = usePathname()

    const showMenu = () => {
        setMenu(!menu)

    }
    return (





        <div>

            <div className="navlink">
                <label htmlFor="iconmenu" onClick={showMenu}>{menu === true ? <CloseOutlined className='iconmenu' /> : < MenuOutlined className='iconmenu' />}</label>
                <ul className={`ul-box ${menu === true ? "showMenu" : ""}`}>
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/jp' ? "active" : ""} href={'/jp'}>ホーム</Link></div>
                    </li>
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/jp/about' ? "active" : ""} href={'/jp/about'}>会社案内</Link></div>
                    </li >
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/jp/technologies' ? "active" : ""} href={'/jp/technologies'}>開発技術紹介</Link></div>
                    </li>
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/jp/product' ? "active" : ""} href={'/jp/product'}>製品紹介</Link></div>
                    </li>
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/jp/network' ? "active" : ""} href={'/jp/network'}>ネットワーク</Link></div>
                    </li>

                      <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/jp/activities' ? "active" : ""} href={'/jp/activities'}>活動</Link></div>
                    </li>
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/jp/contact' ? "active" : ""} href={'/jp/contact'}>お問い合わせ</Link></div>
                    </li>
                    <div className="btn-box">
                        <Link href={'/'}><button className='en-btn'>EN</button></Link>
                        <div className="tr"></div>
                        <Link href={'/jp/'}><button className='jp-btn'>JP</button></Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}
