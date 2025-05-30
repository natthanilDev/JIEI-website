import './networkcompany.css'
import img1 from '../../../../public/img1.png'
import Image from 'next/image'
export default function newworkcompany() {
     const jiei = 'JIEI(THAILAND).CO.,LTD'
  return (
    <div>
          <div className="network-box">
                <div className="network-topic">
                    <h1>Associated companies that respond to your global needs</h1>
                </div>
                <div className="network-company-box">
                    <div className="network-company">
                        <div className="company-box-network-red">
                            <p>JIEI (Thailand) Co., Ltd.</p>
                        </div>
                        <div className="company-box-network-green">
                            <p>Jiaxing JIEI Automobile Parts Co., Ltd.</p>
                        </div>
                        <div className="company-box-network-green">
                            <p>JIEI (Singapore) Pte. Ltd.</p>
                        </div>
                        <br />
                        <div className="company-box-network">
                            <p>Tokai Kogyo Co., Ltd.</p>
                        </div>

                        <div className="company-box-network">
                            <p>ADO CO., LTD.</p>
                        </div> <div className="company-box-network">
                            <p>ALFA CO., LTD.</p>
                        </div>

                        <div className="company-box-network">
                            <p>COWERK CO., LTD.</p>
                        </div>
                        <div className="company-box-network">
                            <p>SEIWA KOGYO CO., LTD.</p>
                        </div>
                        <div className="company-box-network">
                            <p>TAKARA KASEI KOGYO CO., LTD.</p>
                        </div>
                        <div className="company-box-network">
                            <p>TOA GOMU KOGYO CO., LTD.</p>
                        </div>
                        <div className="company-box-network">
                            <p>TOKAI KOGYO SEIKI CO., LTD.</p>
                        </div>
                        <div className="company-box-network">
                            <p>FUJI CO., LTD.</p>
                        </div>
                        <div className="company-box-network">
                            <p>BUTSURYU CENTER LTD.</p>
                        </div>
                    </div>
                    <div className="img-network">
                        <Image src={img1} alt={jiei} priority />
                    </div>
                    <div className="network-company">
                        <div className="company-box-network-green">
                            <p> JIEI Technical Trading(Shanghai)Co., Ltd.</p>
                        </div>
                        <div className="company-box-network-green">
                            <p>JIEI Technical Trading(Shanghai)Co., Ltd. Guangzhou Office</p>
                        </div>
                        <div className="company-box-network-green">
                            <p>JIEI Technical Trading(Shanghai)Co., Ltd. Wuhan Office</p>
                        </div>
                        <br />
                        <div className="company-box-network">
                            <p>GREEN TOKAI CO., LTD.</p>
                        </div>

                        <div className="company-box-network">
                            <p>TOACS THAILAND CO., LTD.</p>
                        </div> <div className="company-box-network">
                            <p>TOACS CENTER PTE., LTD.</p>
                        </div>

                        <div className="company-box-network">
                            <p>VIETNAM TOKAI CO., LTD.</p>
                        </div>
                        <div className="company-box-network">
                            <p>GUANGZHOU TOKAI MINTH AUTOMOTIVE PARTS CO., LTD.</p>
                        </div>
                        <div className="company-box-network">
                            <p>WUHAN TOKAIMINTH AUTOMOTIVE PARTS CO., LTD.</p>
                        </div>
                        <div className="company-box-network">
                            <p>TK MINTH MEXICO, S.A. de C.V.</p>
                        </div>
                        <div className="company-box-network">
                            <p>PT.TOYOTA AUTO BODY-TOKAI EXTRUSION (T-TEC)</p>
                        </div>
                        <div className="company-box-network">
                            <p>PPAP TOKAI INDIA RUBBER PTE. LTD.</p>
                        </div>
                        <div className="company-box-network">
                            <p>TOKAI JIEI ASIA CO., LTD.</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
