import Image from "next/image"
import Jiei from '../../public/jiei.jpg'
import Link from "next/link"
import '../globals.css'
import App from "@/app/en/component/swiper/swiper"
import IATF1 from '../../public/IATF1.png'
import IATF2 from '../../public/IATF2.png'
import iso9001 from '../../public/9001.png'
import iso14001 from '../../public/14001.png'

import { CarFilled, TeamOutlined, AndroidOutlined, AreaChartOutlined } from "@ant-design/icons"
export default function Index() {
  return (
    <div>
      <div className="box">
        <div className="container">
          <div className="introHomePage">
            <div className="introContent">
              <div className="topicHomePage">
                <h1> ジェイイーアイ（タイ）株式会社</h1>
              </div>
              <div className="contentHomePage">
                <p>
                   私たちは、自動車業界向けのゴム部品、例えば自動車のドアシールなどの製造を専門とする企業です。
                  当社は品質、安全性、そして環境への配慮を重視して事業を行っております。
                  また、ISO 9001、ISO 14001、IATF 16949 などの国際認証を取得しており、
                  生産プロセスの継続的な改善に取り組むことで、お客様の満足度を最大限に高めることを目指しています。
                </p>
              </div>
              <Link href={'/jp/product'}>
                <div className="btn-intro-home-page">
                  <button>情報</button>
                </div>
              </Link>

              <div className="detel">
                <div className="boxDetel">
                  <p className="topicISO">ISO 9001</p>
                  <p className="dispriptionISO">品質基準</p>
                </div>
                <div className="boxDetel">
                  <p className="topicISO" >ISO 14001</p>
                  <p className="dispriptionISO">環境認証</p>
                </div>
                <div className="boxDetel">

                  <p className="topicISO">IATF 16949</p>
                  <p className="dispriptionISO">	自動車産業規格</p>
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
              <p>私たち JIEI (THAILAND) はASEAN地域を中心に、自動車や建材などさまざまなゴム製品を取り扱っています。</p>
            </div>
          </div>


          <div className="card">
            <div className="image-card">
              <AndroidOutlined className="icon-intro" />
            </div>
            <div className="content-card">
              <p>独自の手法を駆使した高精度技術で、美しく快適なクルマ作りを支えてきた実績があります。</p>
            </div>
          </div>


          <div className="card">
            <div className="image-card">
              <TeamOutlined className="icon-intro" />
            </div>
            <div className="content-card">
              <p>常に最新鋭の技術を取り入れお客様のニーズに対応することを心がけています。</p>
            </div>
          </div>



          <div className="card">
            <div className="image-card">
              <AreaChartOutlined className="icon-intro" />
            </div>
            <div className="content-card">
              <p>経験豊富な設計、材料開発、工法開発にて量産までのスケジュールを完全にサポートいたします。</p>
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
