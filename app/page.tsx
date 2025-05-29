import Image from "next/image"
import Jiei from '../public/jiei.jpg'
import Link from "next/link"
import './globals.css'
import App from "@/component/swiper/swiper"
import IATF1 from '../public/IATF1.png'
import IATF2 from '../public/IATF2.png'
import iso9001 from '../public/9001.png'
import iso14001 from '../public/14001.png'

import { CarFilled, TeamOutlined, AndroidOutlined, AreaChartOutlined } from "@ant-design/icons"
export default function Index() {
  return (
    <div>
      <div className="box">
        <div className="container">
          <div className="introHomePage">
            <div className="introContent">
              <div className="topicHomePage">
                <h1>JIEI(THAILAND).CO.,LTD</h1>
              </div>
              <div className="contentHomePage">
                <p>
                  We are a specialist in the manufacturing of rubber components for the automotive industry, such as car door seals. Our operations emphasize quality, safety, and environmental responsibility. The company is certified with international standards including ISO 9001, ISO 14001, and IATF 16949, reflecting our commitment to continuous improvement in our production processes to ensure maximum customer satisfaction.
                </p>
              </div>
              <Link href={'/product'}>
                <div className="btn-intro-home-page">
                  <button>Information</button>
                </div>
              </Link>

              <div className="detel">
                <div className="boxDetel">
                  <p className="topicISO">ISO 9001</p>
                  <p className="dispriptionISO">มาตรฐานด้านคุณภาพ</p>
                </div>
                <div className="boxDetel">
                  <p className="topicISO" >ISO 14001</p>
                  <p className="dispriptionISO">มาตรฐานด้านสิ่งแวดล้อม</p>
                </div>
                <div className="boxDetel">

                  <p className="topicISO">IATF 16949</p>
                  <p className="dispriptionISO">มาตรฐานด้านรถยนต์</p>
                </div>

              </div>
            </div>
            <div className="image-intro-box">
              <Image src={Jiei} alt="JIEI(THAILAND).CO.,LTD" priority className="image-intro" />
            </div>
          </div>
        </div>
      </div>


      <div className="card-box">
        <div className="card-all">
          <div className="card">
            <div className="image-card">
              <CarFilled className="icon-intro" />
            </div>
            <div className="content-card">
              <p>Our company, JIEI (Thailand) is focused on the ASEAN region and offers a variety of rubber products for construction materials, automobiles, and other industrial uses. </p>
            </div>
          </div>


          <div className="card">
            <div className="image-card">
              <AndroidOutlined className="icon-intro" />
            </div>
            <div className="content-card">
              <p>Our high-precision technology utilizes proprietary techniques and boasts real results in supporting the creation of beautiful and comfortable vehicles.</p>
            </div>
          </div>


          <div className="card">
            <div className="image-card">
              <TeamOutlined className="icon-intro" />
            </div>
            <div className="content-card">
              <p>Committed to responding to the demands of our customers, we are always incorporating the latest state-of-the-art technology. </p>
            </div>
          </div>



          <div className="card">
            <div className="image-card">
              <AreaChartOutlined className="icon-intro" />
            </div>
            <div className="content-card">
              <p>We fully support a schedule that extends from richly-experienced design planning and material development to mass production through industrial methods development. </p>
            </div>
          </div>
        </div>
      </div>

      <App />

      <div className="container-iatf16949">
        <h1 className="Certificate">IATF16949 Certificate</h1>
        <div className="iatf16949">
          <div className="image-iatf">
            <Image className="iatfimage" src={IATF1} alt="JIEI(THAILAND).CO.,LTD" priority />
          </div>
          <div className="image-iatf">
            <Image className="iatfimage" src={IATF2} alt="JIEI(THAILAND).CO.,LTD" priority />
          </div>
        </div>

        <div className="ISO9001">
          <div className="iso-box">
            <h1>ISO9001 Certificate </h1>
            <h1>ISO14001 Certificate</h1>
          </div>

          <div className="iatf16949">
            <div className="image-iatf">
              <Image className="iatfimage" src={iso9001} alt="JIEI(THAILAND).CO.,LTD" priority />
            </div>
            <div className="image-iatf">
              <Image className="iatfimage" src={iso14001} alt="JIEI(THAILAND).CO.,LTD" priority />
            </div>
          </div>
        </div>


      </div>
    </div>

  )
}
