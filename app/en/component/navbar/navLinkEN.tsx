'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
export default function Navlink() {
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
                        <div className="li-link"><Link className={pathname === '/' ? "active" : ""} href={'/'}>HOME</Link></div>
                    </li>
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/en/about' ? "active" : ""} href={'/en/about'}>COMPANY PROFILE</Link></div>
                    </li >
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/en/technologies' ? "active" : ""} href={'/en/technologies'}>TECHNOLOGIES</Link></div>
                    </li>
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/en/product' ? "active" : ""} href={'/en/product'}>PRODUCT</Link></div>
                    </li>
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/en/network' ? "active" : ""} href={'/en/network'}>NETWORK</Link></div>
                    </li>
                     <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/en/activities' ? "active" : ""} href={'/en/activities'}>ACTIVITIES</Link></div>
                    </li>
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/en/contact' ? "active" : ""} href={'/en/contact'}>CONTACT</Link></div>
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
