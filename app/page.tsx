'use client'
import Link from "next/link"
import './globals.css'
import './en/component/index/imageISO/iatf.css'
import App from "@/app/en/component/swiper/swiper"
import Iatf16949 from "./en/component/index/imageISO/iatf"
import './en/component/swiper/swiper.css'
import { CarFilled, TeamOutlined, AndroidOutlined, AreaChartOutlined } from "@ant-design/icons"
export default function Index() {


  return (
    <div>
     


      <div className="index-intro-box">
        <div className="index-intro">
          <div className="box-text-index">
            <h1 className="topic-index-company">JIEI(THAILAND).CO.,LTD</h1>

          </div>
          <div className="content-intro-index-box">
            <p className="content-intro-index">
              We are a specialist in the manufacturing of rubber components for the automotive industry, such as car door seals. Our operations emphasize quality, safety, and environmental responsibility. The company is certified with international standards including ISO 9001, ISO 14001, and IATF 16949, reflecting our commitment to continuous improvement in our production processes to ensure maximum customer satisfaction.
            </p>
          </div>
          <div className="iso-index-box">
            <div className="iso">
              <p className="iso-topic">ISO 9001</p>
              <p className="dis-iso">มาตรฐานด้านคุณภาพ</p>
            </div>
            <div className="iso">
              <p className="iso-topic" >ISO 14001</p>
              <p className="dis-iso">มาตรฐานด้านสิ่งแวดล้อม</p>
            </div>
            <div className="iso">

              <p className="iso-topic">IATF 16949</p>
              <p className="dis-iso">มาตรฐานด้านรถยนต์</p>
            </div>

          </div>
          <Link href={'/en/product'}>
            <div className="btn-intro-information-box">
              <button className="btn-information">INFORMATION</button>
            </div>
          </Link>


        </div>

      </div>




      <div className="card-index-intro">
        <div className="card-about-company">
          <div className="cardabot">
            <div className="image-card">
              <CarFilled className="icon-intro1" />
            </div>
            <div className="content-card">
              <p>Our company, JIEI (Thailand) is focused on the ASEAN region and offers a variety of rubber products for construction materials, automobiles, and other industrial uses. </p>
            </div>
          </div>


          <div className="cardabot">
            <div className="image-card">
              <AndroidOutlined className="icon-intro1" />
            </div>
            <div className="content-card">
              <p>Our high-precision technology utilizes proprietary techniques and boasts real results in supporting the creation of beautiful and comfortable vehicles.</p>
            </div>
          </div>


          <div className="cardabot">
            <div className="image-card">
              <TeamOutlined className="icon-intro1" />
            </div>
            <div className="content-card">
              <p>Committed to responding to the demands of our customers, we are always incorporating the latest state-of-the-art technology. </p>
            </div>
          </div>



          <div className="cardabot">
            <div className="image-card">
              <AreaChartOutlined className="icon-intro1" />
            </div>
            <div className="content-card">
              <p>We fully support a schedule that extends from richly-experienced design planning and material development to mass production through industrial methods development. </p>
            </div>
          </div>
        </div>
      </div>

      <App />
      <Iatf16949 />
    </div>

  )
}
