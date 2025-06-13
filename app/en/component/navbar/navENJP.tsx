'use client'
import { usePathname } from "next/navigation"
import Navbar from "./navbarEN"
import Navbarjp from "./navabarJP"
import './navbar.css'
export default function NavENJP() {
    const pathname = usePathname()
  return (
    <div className="nav-container">
        {pathname == '/jp' ||pathname == '/jp/about' ||pathname == '/jp/technologies' ||pathname == '/jp/product' ||pathname == '/jp/network'||pathname == '/jp/activities'||pathname == '/jp/contact'  ? <Navbarjp /> : <Navbar />}
    </div>
  )
}
