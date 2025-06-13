import Image from 'next/image'
import NavlinkJP from './navLinkJP'
import Logo from '../../../../public/logoNavbar.png'
import Link from 'next/link'
export default function Navbarjp() {
  return (
    <nav className='nav-container'>
        <div className="navbar-box">
            <div className="logo-box">
               <Link href={'/jp'}><Image className='logo' src={Logo} width={120} height={35} alt='JIEI(THAILADN).CO.,LTD'  priority/></Link> 
            </div>
            <div className="link-box">
                <NavlinkJP />
            </div>
        </div>
    </nav>
  )
}
