'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import './navbar.css'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
export default function navlink() {
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
                        <div className="li-link"><Link className={pathname === '/about' ? "active" : ""} href={'/about'}>ABOUT</Link></div>
                    </li >
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/technologies' ? "active" : ""} href={'/technologies'}>TECHNOLOGIES</Link></div>
                    </li>
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/product' ? "active" : ""} href={'/product'}>PRODUCT</Link></div>
                    </li>
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/network' ? "active" : ""} href={'/network'}>NETWORK</Link></div>
                    </li>
                    <li onClick={showMenu}>
                        <div className="li-link"><Link className={pathname === '/contact' ? "active" : ""} href={'/contact'}>CONTACT</Link></div>
                    </li>
                    <div className="btn-box">
                        <Link href={''}><button className='en-btn'>EN</button></Link>
                        <div className="tr"></div>
                        <Link href={''}><button className='jp-btn'>JP</button></Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}
