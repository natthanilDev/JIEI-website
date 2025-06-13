'use client';
import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';

const { Meta } = Card;

const Design: React.FC = () => (
    <>
        <div className="box-tech">
            <div className="topDesignAnalysis">
                <h1 className='title-tech-h1DA'>Design & Analysis</h1>
            </div>
            <div className="tech-card-c">
                <Card
                    hoverable
                    cover={
                        <Image
                            className="image-tech"
                            alt="CAD Drawing"
                            src="/c1.jpg"
                            width={300}
                            height={200}
                            priority
                        />
                    }
                >
                    <Meta title="CAD Drawing" />
                </Card>

                <Card
                    hoverable
                    cover={
                        <Image
                            className="image-tech"
                            alt="Structural Analysis"
                            src="/c2.jpg"
                            width={300}
                            height={200}
                            priority
                        />
                    }
                >
                    <Meta title="Structural Analysis" />
                </Card>

                <Card
                    hoverable
                    cover={
                        <Image
                            className="image-tech"
                            alt="Material Simulation"
                            src="/c3.jpg"
                            width={300}
                            height={200}
                            priority
                        />
                    }
                >
                    <Meta title="Material Simulation" />
                </Card>

                <Card
                    hoverable
                    cover={
                        <Image
                            className="image-tech"
                            alt="Product Testing"
                            src="/c4.jpg"
                            width={100}
                            height={100}
                            priority
                        />
                    }
                >
                    <Meta title="Product Testing" />
                </Card>
            </div>

        </div>


        <div className="box-topic-tech">
            <div className="box-topic-tech-box">
                <h1 className='Introduction'>Materials Development</h1>
            </div>

        </div>

        <div className="MaterialsDevelopment-dev">
                <div className="card-MaterialsDevelopment-dev">
                    <div className="image-dev">
                        <Image className="image-dev-dev"width={200} height={300} src={"/d3.jpg"} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p className='text-dev'>Test Roll</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment-dev">
                    <div className="image-dev">
                        <Image className="image-dev-dev"width={200} height={300} src={"/d4.png"} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p className='text-dev'>Money Viscosity meter</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment-dev">
                    <div className="image-dev">
                        <Image className="image-dev-dev"width={200} height={300} src={"/d1.jpg"} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p className='text-dev'>Tensile strength testing machine</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment-dev">
                    <div className="image-dev">
                        <Image className="image-dev-dev"width={200} height={300} src={"/d2.jpg"} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p className='text-dev'>Compressive load analysis and contact stress analysis</p>
                    </div>
                </div>

            </div>

             <div className="box-topic-tech">
                <div className="box-topic-tech-box">
                    <h1 className='Introduction'>Functional Evaluatio</h1>
                </div>

            </div>
             <div className="MaterialsDevelopment-dev">
                <div className="card-MaterialsDevelopment-dev">
                    <div className="image-dev">
                        <Image className="image-dev-dev" width={100} height={200} src={"/f1.jpg"} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p className='text-dev'>Load Testing Machine</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment-dev">
                    <div className="image-dev">
                        <Image className="image-dev-dev" width={100} height={200} src={"/f2.png"} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p className='text-dev'>Surface Pressure Distribution</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment-dev">
                    <div className="image-dev">
                        <Image className="image-dev-dev" width={100} height={200} src={"/f3.jpg"} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p className='text-dev'>Surface Pressure Distribution Measurement</p>
                    </div>
                </div>
                <div className="card-MaterialsDevelopment-dev">
                    <div className="image-dev">
                        <Image className="image-dev-dev" width={100} height={200} src={"/f4.jpg"} alt='JIEI(THAILAND).CO.,LTD' priority />
                    </div>
                    <div className="content-materials">
                        <p className='text-dev'>Simple Sound Insulation Performance Measurement</p>
                    </div>
                </div>

            </div>
    </>
);

export default Design;
