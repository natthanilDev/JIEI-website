import './tech.css'
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
export default function page() {

    return (
        <div>
            <div className="box-topic-tech">
                <div className="box-topic-tech-box">
                    <h1 className='Introduction'>Introduction of development technology</h1>
                </div>

            </div>

            <div className="box-tech">
                <div className="tech-discription">
                    <div className="box-card-tech">
                        <div className="card-tech">
                            <div className="topic-card-tech">
                                <h1>Design & Analysis</h1>
                            </div>

                            <div className="discription-tech">
                                <ul className="ul-tech">
                                    <div className="ul-card-box1">
                                        <li>CAD / CATIA</li>
                                        <p>We design using V5, the latest version of the CATIA 3-D CAD software.</p>
                                    </div>

                                    <div className="ul-card-box2">
                                        <li>Stress Analysis</li>
                                        <p>By analyzing the stresses and behaviours of products with the aid of computers, a product&apos;s performance can be accurately estimated before actually making the product.</p>
                                    </div>

                                    <div className="ul-card-box1">
                                        <li>R Tracking Analysis</li>
                                        <p></p>
                                    </div>

                                    <div className="ul-card-box2">
                                        <li>Material Flow Analysis</li>
                                        <p>We analyze the behaviour of materials in moulds during the injection moulding process and create simulations of material flow, pressure, contraction, and warp deformation during the filling process, allowing us to optimize mould designs to reflect those changes.</p>
                                    </div>

                                    <div className="ul-card-box1">
                                        <li>Compressive Load Analysis & Contact Stress Analysis</li>
                                        <p>We analyze compressive loads and contact stresses to confirm that seal performance is satisfactory.</p>
                                    </div>



                                </ul>
                            </div>
                        </div>


                        <div className="card-tech">
                            <div className="topic-card-tech">
                                <h1>Materials Development</h1>
                            </div>
                            <div className="discription-tech">
                                <ul className="ul-tech">
                                    <div className="ul-card-box1">
                                        <li>Test roll</li>
                                        <p>We are engaged in research and development for superior rubber.</p>
                                    </div>

                                    <div className="ul-card-box2">
                                        <li>Money Viscosity Measurements</li>
                                        <p>And check to ensure that it satisfies a variety of physical property requirements. </p>
                                    </div>

                                </ul>
                            </div>

                        </div>

                        <div className="card-tech">
                            <div className="topic-card-tech">
                                <h1>Functional Evaluation</h1>
                            </div>
                            <div className="discription-tech">
                                <ul className="ul-tech">
                                    <div className="ul-card-box1">
                                        <li>Compressive Load Measurements</li>
                                        <p>We develop products that satisfy load requirements.</p>
                                    </div>

                                    <div className="ul-card-box2">
                                        <li>Pressure Distribution Measurements</li>
                                        <p>The measuring of contact pressure exerted on products in real-time aids in the analysis of product defects.</p>
                                    </div>

                                    <div className="ul-card-box1">
                                        <li>Sound-Insulating Performance Evaluations</li>
                                        <p> As comfortable cabin spaces are highly desired by our customers, we are constantly in pursuit of materials with enhanced sound-insulating performance.</p>
                                    </div>

                                    <div className="ul-card-box2">
                                        <li>Dynamic Load Measurements</li>
                                        <p></p>
                                    </div>

                                    <div className="ul-card-box1">
                                        <li>Sliding Friction Ratings</li>
                                        <p></p>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className="card-tech">
                            <div className="topic-card-tech">
                                <h1>Measurement & Testing</h1>
                            </div>
                            <div className="discription-tech">
                                <ul className="ul-tech">
                                    <div className="ul-card-box1">
                                        <li>Hardness & Specific Gravity Measurements</li>
                                        <p></p>
                                    </div>

                                    <div className="ul-card-box2">
                                        <li>Tensile Strength Measurements</li>
                                        <p></p>
                                    </div>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="topDesign-Analysis">
                <h1>Design & Analysis</h1>
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
                    <h1 className='Introduction'>Materials Development</h1>
                </div>

            </div>
            <div className="MaterialsDevelopment">
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={d3} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>Test Roll</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={d4} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>Money Viscosity meter</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={d1} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>Tensile strength testing machine</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={d2} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>Compressive load analysis and contact stress analysis</p>
                    </div>
                </div>

            </div>
            <div className="box-topic-tech">
                <div className="box-topic-tech-box">
                    <h1 className='Introduction'>Functional Evaluatio</h1>
                </div>

            </div>
             <div className="MaterialsDevelopment">
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={f1} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>Load Testing Machine</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={f2} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>Surface Pressure Distribution</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={f3} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>Surface Pressure Distribution Measurement</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment">
                    <div className="image-dev">
                        <Image className="image-dev" src={f4} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p>Simple Sound Insulation Performance Measurement</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
