'use client'
import { usePathname } from "next/navigation"
import Navbar from "./navbarEN"
import Navbarjp from "./navabarJP"
export default function NavENJP() {
    const pathname = usePathname()
  return (
    <div className="nav-container">
        {pathname == '/jp' ||pathname == '/jp/about' ||pathname == '/jp/technologies' ||pathname == '/jp/product' ||pathname == '/jp/network'||pathname == '/jp/contact'  ? <Navbarjp /> : <Navbar />}
    </div>
  )
}
