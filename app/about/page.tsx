import Image from "next/image"
import president from '../../public/jiei(thailand).png'
import jiei1 from '../../public/jiei1.jpg'
import jiei2 from '../../public/jiei2.jpg'

import './about.css'
export default function page() {
    return (
        <div>
            <div className="president-box">
                <h1 className="cpn">Company Message</h1>
                <div className="president">
                    <div className="image-president-box">
                        <Image className="president-image" src={president} alt="JIEI(THAILAND).CO.,LTD" priority />
                    </div>
                    <div className="content-president">
                        <p className="thank-p">Thank you very much for taking the time to visit our website.</p>
                        <p className="discription-president">
                            JIEI (Thailand) Co., Ltd. was founded in November 2011 as a member company of the Kasei Kogyo Co., Ltd. group. Active in business since 1966, the Kasei Kogyo group, with a core focus on rubber extrusion for automobile use, has arrived at the present together with the development of the world&apos;s automotive industry.
                            Through a variety of processes, from planning and development in industrial methods to production, we place a priority on responding to global demands and are involved in precision and quality product manufacturing using advanced technology that can respond to the needs of many types of customers, all from our bases in not only Japan but also North America, China, and Asia.
                            The Kasei Kogyo group has been structured to respond with speed and precision to the rapidly-evolving demands of the industry, putting to practice the creative, constructive know-how gained through experience in the automotive industry.
                            In the future as well, we will spare no effort as an enterprise in striving to make even greater contributions to the global society.We&apos; d like to thank everyone for your support and encouragement and hope we will continue to enjoy your patronage in the future.
                        </p>
                    </div>
                </div>
                <div className="companyProfile">
                    <div className="company-text">
                        <h1 className="cp">Company Profile</h1>
                    </div>

                    <div className="card-company-profile">
                        <div className="image-company-profile-box">
                            <Image className="jiei-image-company-profile" src={jiei1} alt="JIEI(THAILAND).CO.,LTD" priority />
                        </div>
                        <div className="topic-copany-profile">
                            <div className="card-company-profile-content">
                                <p className="topic-company-profile-list">Company name :</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="discription-company-profile-content">JIEI (THAILAND) CO., LTD</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="topic-company-profile-list">Address :</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="discription-company-profile-content">Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6, T.Bueng, A.Sriracha, Chonburi 20230 Thailand Tel. 033136581-4</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="topic-company-profile-list">Establishment :</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="discription-company-profile-content">11/11/2011</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="topic-company-profile-list">Capital :</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="discription-company-profile-content">150,000,000 BHT</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="topic-company-profile-list">Number of employees :</p>
                            </div>
                            <div className="card-company-profile-content">
                                <p className="discription-company-profile-content">276 people (2025 currently)</p>
                            </div>
                        </div>
                    </div>
                    <div className="company-text">
                        <h1 className="cp-tp">Board of Directors</h1>
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
                <h1 className="topic-company-list">The main trading partners</h1>
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
