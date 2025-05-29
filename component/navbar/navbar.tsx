import Image from 'next/image'
import './navbar.css'
import Navlink from './navlink'
import Logo from '../../public/logoNavbar.png'
export default function navbar() {
  return (
    <nav className='nav-container'>
        <div className="navbar-box">
            <div className="logo-box">
                <Image className='logo' src={Logo} width={120} height={35} alt='JIEI(THAILADN).CO.,LTD'  priority/>
            </div>
            <div className="link-box">
                <Navlink />
            </div>
        </div>
    </nav>
  )
}
