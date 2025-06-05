'use client'
import { usePathname } from "next/navigation"
import FooterEN from "./footerEN"
import FooterJP from "./footerJP"
export default function FooterENJP() {
      const pathname = usePathname();
      
    return (
        <div>
            {pathname == '/jp' || pathname == '/jp/about' || pathname == '/jp/technologies' || pathname == '/jp/product' || pathname == '/jp/network'||pathname == '/jp/activities' || pathname == '/jp/contact' ? <FooterJP /> : <FooterEN />}

           
        </div>
    )
}
