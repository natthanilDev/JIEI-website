import Image from 'next/image'
import Navlink from './navLinkEN'
import Logo from '../../../../public/logoNavbar.png'
import Link from 'next/link'
export default function navbar() {
  return (
    <nav className='nav-container'>
        <div className="navbar-box">
            <div className="logo-box">
               <Link href={'/'}><Image className='logo' src={Logo} width={120} height={35} alt='JIEI(THAILADN).CO.,LTD'  priority/></Link> 
            </div>
            <div className="link-box">
                <Navlink />
            </div>
        </div>
    </nav>
  )
}
