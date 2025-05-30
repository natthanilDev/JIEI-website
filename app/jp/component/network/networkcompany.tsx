import './networkcompany.css'
import img1 from '../../../../public/img1.png'
import Image from 'next/image'
export default function newworkcompany() {
     const jiei = 'JIEI(THAILAND).CO.,LTD'
  return (
    <div>
          <div className="network-box">
                <div className="network-topic">
                    <h1>グローバルなニーズに応える、関連会社</h1>
                </div>
                <div className="network-company-box">
                    <div className="network-company">
                        <div className="company-box-network-red">
                            <p>JIEI (Thailand) Co., Ltd.</p>
                        </div>
                        <div className="company-box-network-green">
                            <p>嘉興滋栄汽車配件有限公司</p>
                        </div>
                        <div className="company-box-network-green">
                            <p>JIEI (Singapore) Pte. Ltd.</p>
                        </div>
                        <br />
                        <div className="company-box-network">
                            <p>東海興業株式会社</p>
                        </div>
                        
                        <div className="company-box-network">
                            <p>アド株式会社</p>
                        </div>

                        <div className="company-box-network">
                            <p>株式会社アルファー</p>
                        </div> <div className="company-box-network">
                            <p>株式会社コベルク</p>
                        </div>

                        <div className="company-box-network">
                            <p>成和工業株式会社</p>
                        </div>
                        <div className="company-box-network">
                            <p>タカラ化成工業株式会社</p>
                        </div>
                        <div className="company-box-network">
                            <p>東亜ゴム工業株式会社</p>
                        </div>
                        <div className="company-box-network">
                            <p>東海興業精機株式会社</p>
                        </div>
                        <div className="company-box-network">
                            <p>冨士株式会社</p>
                        </div>
                        <div className="company-box-network">
                            <p>有限会社物流センター</p>
                        </div>
                        
                    </div>
                    <div className="img-network">
                        <Image src={img1} alt={jiei} priority />
                    </div>
                    <div className="network-company">
                        <div className="company-box-network-green">
                            <p> J滋栄技研貿易(上海)有限公司</p>
                        </div>
                        <div className="company-box-network-green">
                            <p>滋栄技研貿易(上海)有限公司 広州営業所</p>
                        </div>
                        <div className="company-box-network-green">
                            <p>滋栄技研貿易(上海)有限公司 武漢営業所</p>
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
                            <p >VIETNAM TOKAI CO., LTD.</p>
                        </div>
                        <div className="company-box-network">
                            <p>広州東海敏孚汽車部件有限公司</p>
                        </div>
                        <div className="company-box-network">
                            <p>武漢東海敏実汽車零部件有限公司</p>
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
