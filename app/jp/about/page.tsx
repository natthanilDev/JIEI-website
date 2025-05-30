import Image from "next/image"
import president from '../../../public/jiei(thailand).png'
import jiei1 from '../../../public/jiei1.jpg'
import jiei2 from '../../../public/jiei2.jpg'

import './about.css'
export default function page() {
    return (
        <div>
            <div className="president-box">
                <h1 className="cpn">会社案内</h1>
                <div className="president">
                    <div className="image-president-box">
                        <Image className="president-image" src={president} alt="JIEI(THAILAND).CO.,LTD" priority />
                    </div>
                    <div className="content-president">
                        <p className="thank-p">当社ホームページをご覧いただきありがとうございます。</p>
                        <p className="discription-president">
                           Jiei (Thailand) Co., Ltd は2011年11月に日本の化成工業株式会社のグループ会社として設立されました。 
                           当化成工業グループ は、1966年に創業以来、自動車用の押出ゴムを核として、 世界の自動車産業の発展と共に歩んでまいりました。 
                           「グローバルニーズに応える」を最優先に考え、工法開発・設計から生産までの様々な工程で、日本のみならず北米・中国・アジア 
                           の全拠点で様々なお客様のご要望に対応できる高い技術力の確立と高品質な製品づくりに取り組んでいます。 化成工業グループは、 
                           自動車産業で経験したモノ造りのノウハウを生かし、 急速に発展する産業ニーズに素早く的確に応える体制 を整えてきました。 
                           我々は時代を先読みし、環境にやさしく高品質の商品を提供してまいります。今後においても企業努力を惜しまず、さらにグローバ 
                           ル社会への貢献を図ってまいります。 皆様方のご支援とご鞭撻をいただきますよう、よろしくお願い申し上げます。
                        </p>
                    </div>
                </div>
                <div className="companyProfile">
                    <div className="company-text">
                        <h1 className="cp">会社概要</h1>
                    </div>

                    <div className="card-company-profile">
                        <div className="image-company-profile-box">
                            <Image className="jiei-image-company-profile" src={jiei1} alt="JIEI(THAILAND).CO.,LTD" priority />
                        </div>
                        <div className="topic-copany-profile">
                            <div className="card-company-profile-content">
                                <p className="topic-company-profile-list">会社概要 :</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="discription-company-profile-content">JIEI (THAILAND) CO., LTD</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="topic-company-profile-list">所在地  :</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="discription-company-profile-content">Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6, T.Bueng, A.Sriracha, Chonburi 20230 Thailand Tel. 033136581-4</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="topic-company-profile-list">設立 :</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="discription-company-profile-content">2011年11月11日</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="topic-company-profile-list">資本金 : </p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="discription-company-profile-content">150,000,000 BHT</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="topic-company-profile-list">従業員数 :</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="discription-company-profile-content">276人（2025 年現在）</p>
                            </div>
                        </div>
                    </div>
                    <div className="company-text">
                        <h1 className="cp-tp">役員一覧</h1>
                    </div>

                    <div className="card-company-profile2">
                        <div className="topic-copany-profile2">
                            <div className="card-company-profile-content">
                                <p className="topic-company-profile-list">President :</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="discription-company-profile-content">Masami Kimura</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="topic-company-profile-list">Director :</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="discription-company-profile-content">Masashi Ezaka</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="topic-company-profile-list">Management Director :</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="discription-company-profile-content">Yoshikatsu Inada</p>
                            </div>
                        </div>
                        <div className="image-company-profile-box">
                            <Image className="jiei-image-company-profile" src={jiei2} alt="JIEI(THAILAND).CO.,LTD" priority />
                        </div>
                    </div>


                </div>
                <h1 className="topic-company-list">主な取引先</h1>
                <div className="box-company-base">
                    <div className="">
                        <ul className="list-customer">
                            <li>Asian Honda Motor Co.,Ltd</li>
                            <li>AGC Automotive (Thailand) Co.,Ltd</li>
                            <li>Daido Manufacturing (Thailand) Co.,Ltd</li>
                            <li>Daiwa Kasei (Thailand) Co.,Ltd</li>
                            <li>Faltec SRG Global (Thailand) Co.,Ltd</li>
                            <li>Fruehauf Mahajak Co.,Ltd</li>
                            <li>Green Tokai Co., Ltd</li>
                            <li>Okayasu Rubber (Malaysia) Sdn Bhd</li>
                            <li>Pilkington North America Inc.</li>
                            <li>Pilkington Glass of Canada</li>
                            <li>Pilkington Automotive UK Ltd.</li>
                            <li>Pilkington Automotive Belgium NV</li>
                            <li>Sum Hitechs Co.,Ltd</li>
                            <li>Saint Gobain Sekurit (Thailand) Co.,Ltd</li>
                            <li>Hori Glass (Thailand) Co.,Ltd</li>
                        </ul>


                    </div>
                    <div className="list-customer">
                        <ul>
                            <li>Honda Automobile (Thailand) Co.,Ltd</li>
                            <li>Honda Trading Asia Co.,Ltd</li>
                            <li>Hitachi Chemical Automotive Products (Thailand) Co.,Ltd</li>
                            <li>Kasei Kogyo Co.,Ltd</li>
                            <li>Moriroku Technology (Thailand) Co.,Ltd</li>
                            <li>Malaysia Sheet Glass Co.,Ltd</li>
                            <li>Shiraishi Calcium (Thailand) Co.,Ltd</li>
                            <li>Shiraishi Calcium Co.,JP</li>
                            <li>Sanko Gosei Technology (Thailand) Ltd.</li>
                            <li>Toacs (Thailand) Co.,Ltd</li>
                            <li>Thai Toyo-Denso Co.,Ltd</li>
                            <li>TREX Thairung Co.,Ltd</li>
                            <li>Thai Tabuchi Electric Co.,Ltd</li>
                            <li>Y-Tec Co.,Ltd</li>
                        </ul>
                        
                    </div>

                </div>



            </div>
        </div>
    )
}
