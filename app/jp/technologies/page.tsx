
import Image from 'next/image'
import c1 from '../../../public/c1.jpg'
import c2 from '../../../public/c2.jpg'
import c3 from '../../../public/c3.jpg'
import c4 from '../../../public/c4.jpg'

import d1 from '../../../public/d1.jpg'
import d2 from '../../../public/d2.jpg'
import d3 from '../../../public/d3.jpg'
import d4 from '../../../public/d4.png'

import f1 from '../../../public/f1.jpg'
import f2 from '../../../public/f2.png'
import f3 from '../../../public/f3.jpg'
import f4 from '../../../public/f4.jpg'
import '../../en/component/technologies/tech.css'
export default function page() {

    return (
        <div>
            <div className="box-topic-tech">
                <div className="box-topic-tech-box">
                    <h1 className='Introduction'>さまざまな機能要求に応えるための技術を紹介します。</h1>
                </div>

            </div>

            <div className="box-tech">
                <div className="tech-discription">
                    <div className="box-card-tech">
                        <div className="card-tech">
                            <div className="topic-card-tech">
                                <h1>設計・解析</h1>
                            </div>

                            <div className="discription-tech">
                                <ul className="ul-tech">
                                    <div className="ul-card-box1">
                                        <li>CAD / CATIA</li>
                                        <p>3次元CADソフトCATIA最新型のV5にて設計を行っています</p>
                                    </div>

                                    <div className="ul-card-box2">
                                        <li>応力解析</li>
                                        <p>コンピュータ上で製品の応力・挙動を解析することにより、実物を作る前に製品の性能が予測できます。</p>
                                    </div>

                                    <div className="ul-card-box1">
                                        <li>R追従性解析</li>
                                        <p></p>
                                    </div>

                                    <div className="ul-card-box2">
                                        <li>材料流動解析</li>
                                        <p>射出成型プロセス中の金型内の材料の挙動を解析し、充填工程における材料流動、 圧力、収縮、そり変形などをシミュレーションし金型設計に反映します。</p>
                                    </div>

                                    <div className="ul-card-box1">
                                        <li>	圧縮荷重解析・接触応力解析</li>
                                        <p>圧縮荷重、接触応力を解析し、シール性能を満足するか確認します。</p>
                                    </div>








                                </ul>
                            </div>
                        </div>


                        <div className="card-tech">
                            <div className="topic-card-tech">
                                <h1>材料開発</h1>
                            </div>
                            <div className="discription-tech">
                                <ul className="ul-tech">
                                    <div className="ul-card-box1">
                                        <li>	テストロール</li>
                                        <p>より優れたゴムの研究・開発しています。</p>
                                    </div>
                                    <div className="ul-card-box1">
                                        <li>ムーニー粘度測定</li>
                                        <p>各種物性値を満足しているかを確認します。</p>
                                    </div>
                                    <div className="ul-card-box1">
                                        <li>硬度・比重測定</li>
                                        <p></p>
                                    </div>

                                    <div className="ul-card-box2">
                                        <li>引張強度測定</li>
                                        <p></p>
                                    </div>


                                </ul>
                            </div>

                        </div>

                        <div className="card-tech">
                            <div className="topic-card-tech">
                                <h1>機能評価</h1>
                            </div>
                            <div className="discription-tech">
                                <ul className="ul-tech">
                                    <div className="ul-card-box2">
                                        <li>圧縮荷重測定</li>
                                        <p>要求荷重を満足する製品を開発します。 </p>
                                    </div>
                                    <div className="ul-card-box1">
                                        <li>圧縮荷重測定</li>
                                        <p>要求荷重を満足する製品を開発します。</p>
                                    </div>

                                    <div className="ul-card-box2">
                                        <li>圧力分布計測</li>
                                        <p>製品にかかる接触圧力をリアルタイムで計測することにより、製品不具合箇所の解析に役立てます。</p>
                                    </div>

                                    <div className="ul-card-box1">
                                        <li>遮音性能評価</li>
                                        <p> 快適な車室内空間が求められており、製品の遮音性能を追及しています。</p>
                                    </div>

                                    <div className="ul-card-box2">
                                        <li>動的荷重測定</li>
                                        <p></p>
                                    </div>

                                    <div className="ul-card-box1">
                                        <li>摺動抵抗評価</li>
                                        <p></p>
                                    </div>
                                </ul>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>

            <div className="topDesign-Analysis">
                <h1>設計・解析</h1>
            </div>
            <div className="DesignAnalysis">
                <div className="card-box-c">
                    <div className="image-card-c">
                        <Image className="image-c" src={c1} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                </div>
                <div className="card-box-c">
                    <div className="image-card-c">
                        <Image className="image-c" src={c2} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                </div>
                <div className="card-box-c">
                    <div className="image-card-c">
                        <Image className="image-c" src={c3} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                </div>
                <div className="card-box-c">
                    <div className="image-card-c">
                        <Image className="image-c" src={c4} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                </div>
            </div>

            <div className="box-topic-tech">
                <div className="box-topic-tech-box">
                    <h1 className='Introduction'>材料開発</h1>
                </div>

            </div>
            <div className="MaterialsDevelopment">
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={d3} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>テストロール</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={d4} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>ムーニー粘度計</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={d1} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>引張強さ試験機</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={d2} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>圧縮荷重解析 および接触応力解析</p>
                    </div>
                </div>

            </div>
            <div className="box-topic-tech">
                <div className="box-topic-tech-box">
                    <h1 className='Introduction'>機能評価</h1>
                </div>

            </div>
            <div className="MaterialsDevelopment">
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={f1} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>荷重試験機</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={f2} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>表面圧力分布</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={f3} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>表面圧力分布測定</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={f4} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>簡易遮音性能測定</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
